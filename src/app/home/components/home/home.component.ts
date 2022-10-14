import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { logout } from "src/app/auth/state/auth.action";
import { AppState } from "src/app/shared/store/app.state";
import { ReportResume } from "../../models/report-resume.interface";
import { Observable } from "rxjs";
import { getResume } from "../../state/home.select";
import { loadReportResume } from "../../state/home.action";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  resume$!: Observable<ReportResume>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(loadReportResume());
    this.resume$ = this.store.select(getResume);
  }

  logout() {
    this.store.dispatch(logout());
  }
}
