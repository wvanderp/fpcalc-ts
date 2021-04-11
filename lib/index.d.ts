import { ResultsEntity } from './acoustidResponse';
/**
 * By default fpcalc return the duration as accurate as possible by using decimals.
 * But this is not supported by the acoustID api so we round it here an have the unrounded length available under fullDuration
 *
 * @typedef FpcalcReturn
 * @property {number} duration the duration of the audio in seconds
 * @property {number} fullDuration the unrounded duration of the audio
 * @property {string} fingerprint the calculated fingerprint of the audio
 */
export interface FpcalcReturn {
    duration: number;
    fullDuration: number;
    fingerprint: string;
}
/**
 * @typedef FpcalcOptions
 * @property {string} command the absolute path or name of the command that you want to use for calculating the fingerprint (must be fpcalc compatible)
 */
export interface FpcalcOptions {
    command: string;
}
/**
 * this function calculates the acoustID fingerprint of a file.
 * fpcalc uses ffmpeg to open the file so make sure that ffmpeg can open the file.
 * you can change the path to fpcalc by supplying an options parameter
 *
 * @param {string} filePath the full or relative path to the audio file. this path is used unchanged
 * @param {FpcalcOptions} [options] can be used to change the fpcalc location
 * @param {string} [options.command] the absolute path or name of the command that you want to use for calculating the fingerprint (must be fpcalc compatible)
 * @returns {Promise<FpcalcReturn>} return the fingerprint and duration rounded and unchanged
 */
export declare function fpcalc(filePath: string, options?: FpcalcOptions): Promise<FpcalcReturn>;
export declare type queryApiReturn = ResultsEntity | null;
/**
 * this function takes the fingerprint and queries the api for as much information about the audio as possible
 *
 * @param {FpcalcReturn} fingerprint the fingerprint object from {@link fpcalc}
 * @param {string} key your personal key to acoustID. available from https://acoustid.org/my-applications
 * @returns {Promise<queryApiReturn>} an object with all the information about the audio
 */
export declare function queryApi(fingerprint: FpcalcReturn, key: string): Promise<queryApiReturn>;
