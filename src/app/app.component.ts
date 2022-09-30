import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { verifySession } from "./auth/state/auth.action";
import { Logger } from "./shared/services/logger.service";
import { AppState } from "./shared/store/app.state";
import { setNotifyMessage } from "./shared/store/shared/shared.action";
import {
  getLoading,
  getNotifyMessage,
} from "./shared/store/shared/shared.selector";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  logger = new Logger(AppComponent.name);
  loadBarProgress$!: Observable<boolean>;

  constructor(private store: Store<AppState>, private _snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.store.dispatch(verifySession());
    this.loadBarProgress$ = this.store.select(getLoading);
    this.store.select(getNotifyMessage).subscribe(([show, message]) => {
      if (show) {
        this.showSnackBar(message as string);
        this.store.dispatch(setNotifyMessage({ message: "", show: false }));
      }
    });
  }

  showSnackBar(message: string) {
    this._snackBar.open(message, "CLOSE", {
      horizontalPosition: "start",
      verticalPosition: "bottom",
      duration: 5000,
    });
  }
}
