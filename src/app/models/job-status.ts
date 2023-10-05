export class JobStatus {
  constructor() {}

  static createFromFHIR(parameters: any): JobStatus {
    let jobStatus = new JobStatus();
    const parameterList = parameters.parameter;
    jobStatus.jobId = parameterList.find((param: any) => param.name === "jobId").valueString;
    jobStatus.jobStatus = parameterList.find((param: any) => param.name === "jobStatus").valueString;
    jobStatus.result = parameterList.find((param: any) => param.name === "result").resource;
    jobStatus.jobStartDateTime = parameterList.find((param: any) => param.name === "jobStartDateTime").valueDateTime;
    return jobStatus;
  }

  jobId: string = "";
  jobStatus: string = "";
  result: any = {};
  jobStartDateTime: string = "";
}
