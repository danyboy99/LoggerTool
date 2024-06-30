// logLevel
// create a enum for the log levvl
export enum LogLevel {
  VERBOSE = "VERBOSE",
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

// create a typescript interface for the log level
export interface ILogger {
  log(level: LogLevel, message: string): void;
  verbose(message: string): void;
  info(message: string): void;
  warning(message: string): void;
  error(message: string): void;
}

// create a Logger
export class Logger implements ILogger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(level: LogLevel, message: string): void {
    const logMessage = `[${level}] ${message}`;
    console.log(logMessage);

    // Future-proofing for file logging
    // this.writeToFile(logMessage);
  }

  verbose(message: string): void {
    this.log(LogLevel.VERBOSE, message);
  }

  info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  warning(message: string): void {
    this.log(LogLevel.WARNING, message);
  }

  error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }

  // Placeholder for file logging
  // private writeToFile(message: string): void {
  //     NativeFileWriteSync('logfile.log', message);
  // }
}
