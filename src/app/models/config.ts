export class Config {
  // Constructor used to create a blank config for observable output only.
  constructor() {}

  version: string = "";
  title: string = "";
  deployUrl: string = "";
  refreshRate: string = "30000"
  rcApiEndpoints: RcApiEndpoints = new RcApiEndpoints();
}

export class RcApiEndpoints {
  constructor() {}

  allForms: string = "";
  allJobsStatus: string = "";
  startAsyncJob: string = "";
}
