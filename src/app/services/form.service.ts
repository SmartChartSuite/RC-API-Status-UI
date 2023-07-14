import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private readonly deployUrl: string;
  private readonly allForms: string;

  constructor(private configService: ConfigService, private http: HttpClient) {
    this.deployUrl = this.configService.config.deployUrl;
    this.allForms = this.configService.config.rcApiEndpoints.allForms;
  }

  getForms(): Observable<string[]> {
    const requestUrl = this.deployUrl + this.allForms;
    return this.http.get(requestUrl).pipe(
      map((resultBundle: any) => {
        let formList: string[] = [];
        resultBundle?.entry?.forEach((entry: any) => {
          formList.push(entry?.resource?.name)
        })
        return formList;
      })
    )
  }
}
