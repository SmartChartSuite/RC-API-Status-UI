import { Component } from '@angular/core';
import {FormService} from "../../services/form.service";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JobService} from "../../services/job.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-start-job',
  templateUrl: './start-job.component.html',
  styleUrls: ['./start-job.component.scss']
})
export class StartJobComponent {

  formList$: Observable<string[]>;
  startJobForm: FormGroup;

  constructor(private formService: FormService, private jobService: JobService,
              private _snackBar: MatSnackBar) {
    this.formList$ = this.formService.getForms();
    this.startJobForm = new FormGroup({
      patientId: new FormControl(null, [Validators.required]),
      jobPackage: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    if (this.startJobForm.invalid) {
      console.log("Form is Invalid")
    }
    else {
    this.jobService.postStartAsyncJob(this.startJobForm.value).subscribe({
      next: (response: any) => {
        this._snackBar.open("Job Submitted", undefined,
          {duration: 5000, verticalPosition: "top"});
        this.startJobForm.reset();
      }
    })}
  }
}
