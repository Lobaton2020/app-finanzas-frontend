import { Component, OnInit, Input } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { Store } from "@ngrx/store";
import { logout } from "src/app/auth/state/auth.action";
import { AppState } from "../../store/app.state";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  [x: string]: any;
  @Input() sidenav!: MatDrawer;
  constructor(readonly store: Store<AppState>) {}

  ngOnInit(): void {}
  doLogout() {
    this.store.dispatch(logout());
  }
}
