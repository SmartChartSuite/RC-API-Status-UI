import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import packageInfo from '../../../package.json';
import { Config } from '../models/config';
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: BehaviorSubject<Config> = new BehaviorSubject<Config>(new Config());
  config$ = this.config.asObservable();
  packageInfo = packageInfo;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http.get<Config>('../../assets/config.json').pipe(
      map(config => {
        config.version = "v" + this.packageInfo.version;
        this.config.next(config)
        return true;
        })
    )
  }
}
