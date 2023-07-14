import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.scss']
})
export class ResultViewerComponent {
  @Input() jobDetails: any;

  JSON: JSON;
  constructor() {
    this.JSON = JSON;
  }
}
