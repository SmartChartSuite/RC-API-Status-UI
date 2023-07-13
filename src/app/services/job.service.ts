import {Injectable, OnInit} from '@angular/core';
import {ConfigService} from "./config.service";
import {map, Observable, skipWhile} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {JobStatus} from "../models/job-status";

@Injectable({
  providedIn: 'root'
})
export class JobService implements OnInit {

  private readonly deployUrl: string;
  private readonly allJobsStatusEndpoint: string;

  constructor(private configService: ConfigService, private http: HttpClient) {
    console.log(this.configService.config)
    this.deployUrl = this.configService.config.deployUrl;
    this.allJobsStatusEndpoint = this.configService.config.rcApiEndpoints.allJobsStatus;
  }

  ngOnInit(): void {}

  getAllJobStatus(): Observable<any> {
    const requestUrl = this.deployUrl + this.allJobsStatusEndpoint;
    return this.http.get(requestUrl).pipe(
      map((jobStatusList: any) => {
        let jobList: JobStatus[] = [];
        for (let key of Object.keys(jobStatusList)) {
          jobList.push(JobStatus.createFromFHIR(jobStatusList[key]))
        }
        return jobList;
      }));
  }
}
