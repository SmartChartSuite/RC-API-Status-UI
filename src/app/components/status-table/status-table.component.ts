import {Component, OnInit} from '@angular/core';
import {JobService} from "../../services/job.service";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getAllJobStatus().subscribe(
      (jobs) => {console.log(jobs)}
    )
  }
}
