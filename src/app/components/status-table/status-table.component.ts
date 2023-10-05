import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {JobService} from "../../services/job.service";
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";
import {interval, startWith, switchMap} from "rxjs";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {
  @Output('showDetails') showDetails: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = [ "jobStartDateTime", "jobId", "jobStatus"]
  jobListDataSource: MatTableDataSource<any>;



  refreshRate: number = 30000;
  private readonly autoRefresh$ = interval(this.refreshRate).pipe(startWith(0));

  constructor(private configService: ConfigService, private jobService: JobService) {
    this.jobListDataSource = new MatTableDataSource<any>([]);

    this.refreshRate = parseInt(this.configService.config.refreshRate);
    this.autoRefresh$.pipe(
      switchMap(() => {
        return this.jobService.getAllJobStatus();
      })
    ).subscribe(jobStatusList => {
        this.jobListDataSource.data = jobStatusList;
    });
  }

  ngOnInit(): void {}

}
