"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevel = void 0;
// logLevel
var LogLevel;
(function (LogLevel) {
    LogLevel["VERBOSE"] = "VERBOSE";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(level, message) {
        const logMessage = `[${level}] ${message}`;
        console.log(logMessage);
        // Future-proofing for file logging
        // this.writeToFile(logMessage);
    }
    verbose(message) {
        this.log(LogLevel.VERBOSE, message);
    }
    info(message) {
        this.log(LogLevel.INFO, message);
    }
    warning(message) {
        this.log(LogLevel.WARNING, message);
    }
    error(message) {
        this.log(LogLevel.ERROR, message);
    }
}
exports.Logger = Logger;
