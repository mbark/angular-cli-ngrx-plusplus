import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  constructor() {}

  public info(msg: string): void {
    // tslint:disable-next-line
    console.info(msg);
  }
}
