import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { verifySession } from "./auth/state/auth.action";
import { Logger } from "./common/services/logger.service";
import { AppState } from "./shared/store/app.state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  logger = new Logger(AppComponent.name);

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(verifySession());
  }
}
