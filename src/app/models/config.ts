export class Config {
  // Constructor used to create a blank config for observable output only.
  constructor() {}

  version: string = "";
  title: string = "";
  deployUrl: string = "";
  rcApiEndpoints: RcApiEndpoints = new RcApiEndpoints();
}

export class RcApiEndpoints {
  constructor() {}

  allJobsStatus: string = "";
}
