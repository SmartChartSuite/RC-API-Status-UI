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
  private readonly startAsyncJob: string;

  constructor(private configService: ConfigService, private http: HttpClient) {
    this.deployUrl = this.configService.config.deployUrl;
    this.allJobsStatusEndpoint = this.configService.config.rcApiEndpoints.allJobsStatus;
    this.startAsyncJob = this.configService.config.rcApiEndpoints.startAsyncJob;
  }

  ngOnInit(): void {}

  getAllJobStatus(): Observable<JobStatus[]> {
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

  postStartAsyncJob(body: {patientId: string, jobPackage: string}): Observable<any> {
    const requestUrl = this.deployUrl + this.startAsyncJob;
    const postBody = this.createParametersResource(body.patientId, body.jobPackage)
    return this.http.post(requestUrl, postBody);
  }

  private createParametersResource(patientId: string, jobPackage: string): any {
    return {
      "resourceType": "Parameters",
      "parameter": [
      {
        "name": "patientId",
        "valueString": patientId
      },
      {
        "name": "jobPackage",
        "valueString": jobPackage
      }
    ]
    }
  }

}
