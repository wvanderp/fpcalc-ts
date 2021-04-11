"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryApi = exports.fpcalc = void 0;
const axios_1 = __importDefault(require("axios"));
const child_process_1 = require("child_process");
const qs_1 = __importDefault(require("qs"));
/**
 * this command takes a command string and run it an than returns the stdout
 *
 * @private
 * @param {string} command the command that will be ran
 * @returns {Promise<string>} stdout of the command
 */
async function runCommand(command) {
    return new Promise((resolve, reject) => {
        child_process_1.exec(command, (error, stdout) => {
            if (error) {
                reject(error);
            }
            resolve(stdout);
        });
    });
}
const defaultCommand = 'fpcalc';
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
async function fpcalc(filePath, options) {
    var _a;
    const command = (_a = options === null || options === void 0 ? void 0 : options.command) !== null && _a !== void 0 ? _a : defaultCommand;
    const json = JSON.parse(await runCommand(`${command} -json "${filePath}"`));
    return Object.assign(Object.assign({}, json), { fullDuration: json.duration, duration: Math.floor(json.duration) });
}
exports.fpcalc = fpcalc;
const baseUrl = 'https://api.acoustid.org/v2/lookup';
/**
 * this function takes the fingerprint and queries the api for as much information about the audio as possible
 *
 * @param {FpcalcReturn} fingerprint the fingerprint object from {@link fpcalc}
 * @param {string} key your personal key to acoustID. available from https://acoustid.org/my-applications
 * @returns {Promise<queryApiReturn>} an object with all the information about the audio
 */
async function queryApi(fingerprint, key) {
    var _a, _b;
    const options = {
        client: key,
        fingerprint: fingerprint.fingerprint,
        duration: fingerprint.duration,
        meta: 'recordings+recordingids+releases+releaseids+releasegroups+releasegroupids+tracks+compress+usermeta+sources'
    };
    const url = `${baseUrl}?${qs_1.default.stringify(options, { encode: false })}`;
    const { data } = await axios_1.default.get(url);
    if (data.status === 'error') {
        throw (_a = data.error) === null || _a === void 0 ? void 0 : _a.message;
    }
    if (((_b = data.results) === null || _b === void 0 ? void 0 : _b.length) === 0) {
        return null;
    }
    return data.results ? data.results[0] : null;
}
exports.queryApi = queryApi;
//# sourceMappingURL=index.js.map