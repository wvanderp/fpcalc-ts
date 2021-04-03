import { ResultsEntity } from './acoustidResponse';
export interface fpcalcReturn {
    duration: number;
    fullDuration: number;
    fingerprint: string;
}
export declare function fpcalc(filePath: string): Promise<fpcalcReturn>;
export declare type queryApiReturn = ResultsEntity | null;
export declare function queryApi(fingerprint: fpcalcReturn, key: string): Promise<queryApiReturn>;
