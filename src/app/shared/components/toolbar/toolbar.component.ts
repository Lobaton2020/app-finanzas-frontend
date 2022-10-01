import { Component, OnInit, Input } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { logout } from "src/app/auth/state/auth.action";
import { getUsername } from "src/app/auth/state/auth.selector";
import { AppState } from "../../store/app.state";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  username$!: Observable<string>;
  @Input() sidenav!: MatDrawer;
  constructor(readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.username$ = this.store.select(getUsername);
  }
  doLogout() {
    this.store.dispatch(logout());
  }
}
