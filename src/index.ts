import axios from 'axios';
import {exec} from 'child_process';
import qs from 'qs';

import acoustidResponse, {ResultsEntity} from './acoustidResponse';

async function runCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout) => {
            if (error) { reject(error); }

            resolve(stdout);
        });
    });
}

const defaultCommand = 'fpcalc';

export interface fpcalcReturn {
    duration: number;
    fullDuration: number;
    fingerprint: string;
}

export async function fpcalc(filePath: string): Promise<fpcalcReturn> {
    const json = JSON.parse(await runCommand(`${defaultCommand} -json "${filePath}"`)) as fpcalcReturn;
    return {
        ...json,
        fullDuration: json.duration,
        duration: Math.floor(json.duration)
    };
}

export type queryApiReturn = ResultsEntity | null

const baseUrl = 'https://api.acoustid.org/v2/lookup';
export async function queryApi(fingerprint: fpcalcReturn, key: string): Promise<queryApiReturn> {
    const options = {
        client: key,
        fingerprint: fingerprint.fingerprint,
        duration: fingerprint.duration,
        meta: 'recordings+recordingids+releases+releaseids+releasegroups+releasegroupids+tracks+compress+usermeta+sources'
    };

    const url = `${baseUrl}?${qs.stringify(options, {encode: false})}`;
    const {data} = await axios.get<acoustidResponse>(url);

    if (data.status === 'error') {
        throw data.error?.message;
    }

    if (data.results?.length === 0) {
        return null;
    }

    return data.results ? data.results[0] : null;
}
