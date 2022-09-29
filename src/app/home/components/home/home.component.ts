import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { logout } from "src/app/auth/state/auth.action";
import { AppState } from "src/app/shared/store/app.state";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout());
  }
}
