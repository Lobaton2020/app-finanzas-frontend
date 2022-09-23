import { Injectable } from '@angular/core';
const LogLevel = {
  Debug: 'info:Debug',
  Info: 'info:Info',
  Warn: 'warning:Warn',
  Error: 'error:Error',
  Fatal: 'error:Fatal',
  All: 'info:All',
};

export class Logger {
  constructor(private identifier: string = '') {}

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All, optionalParams);
  }

  private writeToLog(msg: string, type: string, restParams: any[]) {
    if (typeof msg == 'object') {
      msg = msg['message'];
    }
    const [typeConsole, logLevel] = type.split(':');
    const c: any = console;
    const time = new Date().toISOString();
    const message = !!this.identifier
      ? `[${logLevel}] ${time} ${this.identifier}: ${msg}`
      : `[${logLevel}] ${time}: ${msg}`;
    c[`${typeConsole}`](message, ...restParams);
  }
}

@Injectable({
  providedIn: 'root',
})
export class LoggerService extends Logger {}
