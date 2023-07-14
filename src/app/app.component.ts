import {Component, OnInit} from '@angular/core';
import {ConfigService} from './services/config.service';
import {JobStatus} from "./models/job-status";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = "";
  version: string = "";
  jobDetails: JobStatus | undefined;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.title = this.configService.config.title;
    this.version = this.configService.config.version;
    document.title = this.title;
  }

  showDetails(jobDetails: any) {
    console.log("Caught event");
    console.log(jobDetails)
    this.jobDetails = jobDetails;
  }
}
