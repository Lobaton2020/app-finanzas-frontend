import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Logger } from './common/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  logger = new Logger(AppComponent.name);

  constructor(readonly http: HttpClient) {}
  ngOnInit(): void {}
}
