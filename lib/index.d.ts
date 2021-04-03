import { ResultsEntity } from './acoustidResponse';
interface fpcalcReturn {
    duration: number;
    fullDuration: number;
    fingerprint: string;
}
export default function fpcalc(filePath: string): Promise<fpcalcReturn>;
declare type queryApiReturn = ResultsEntity | null;
export declare function queryApi(fingerprint: fpcalcReturn, key: string): Promise<queryApiReturn>;
export {};
