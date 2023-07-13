export class JobStatus {
  constructor() {}

  static createFromFHIR(parameters: any) {
    let jobStatus = new JobStatus();
    console.log(parameters)
    const parameterList = parameters.parameter;
    jobStatus.jobId = parameterList.filter((param: any) => param.name === "jobId");
    jobStatus.jobStatus = parameterList.filter((param: any) => param.name === "jobStatus");
    jobStatus.result = parameterList.filter((param: any) => param.name === "result");
    jobStatus.jobStartDateTime = parameterList.filter((param: any) => param.name === "jobStartDateTime");
    return jobStatus;
  }

  jobId: string = "";
  jobStatus: string = "";
  result: any = {};
  jobStartDateTime: string = "";
}
