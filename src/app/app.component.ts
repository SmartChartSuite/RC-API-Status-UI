import {Component, OnInit} from '@angular/core';
import {ConfigService} from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = "";
  version: string = "";

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.title = this.configService.config.title;
    this.version = this.configService.config.version;
    document.title = this.title;
  }

}
