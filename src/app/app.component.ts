import {Component, OnInit} from '@angular/core';
import {ConfigService} from './services/config.service';
import {Config} from "./models/config";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config$: Observable<Config>;
  title: string = "36546546";
  version: string = "645645645";

  constructor(private configService: ConfigService) {
    this.config$ = this.configService.config$
  }

  ngOnInit(): void {
    this.config$.subscribe(
      config => {
        console.log("got Config")
        console.log(config)
        this.title = config.title;
        this.version = config.version;
        document.title = this.title;
      }
    )
  }

}
