import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import packageInfo from '../../../package.json';
import { Config } from '../models/config';
import {BehaviorSubject, catchError, lastValueFrom, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Config = new Config();
  packageInfo = packageInfo;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http.get<Config>('../../assets/config.json').pipe(
      map(config => {
        config.version = "v" + this.packageInfo.version;
        //this.config.next(config)
        this.config = config;
        //return true;
        console.log(config)
        return true;
        }),
      catchError(error => {
        // if in error, set default fall back from environment
        console.error(error);
        //this.config.next(new Config());
        this.config = new Config();
        return of(false);
      })
    )
  }
}
