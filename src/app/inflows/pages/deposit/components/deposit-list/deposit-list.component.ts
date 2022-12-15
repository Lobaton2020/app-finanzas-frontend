import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DEFAULT_PAGINATION } from "@app/shared/pagination/meta.config";
import { AppState } from "@app/shared/store/app.state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadDeposits } from "../../state/deposit.action";
import { getDesposits } from "../../state/deposit.select";
import { Deposit } from "../../state/deposit.state";
import { ModalDialogComponent } from "../modal-dialog/modal-dialog.component";

@Component({
  selector: "app-deposit-list",
  templateUrl: "./deposit-list.component.html",
  styleUrls: ["./deposit-list.component.scss"],
})
export class DepositListComponent implements OnInit {
  deposits$!: Observable<Deposit[]>;
  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadDeposits(DEFAULT_PAGINATION));
    this.deposits$ = this.store.select(getDesposits);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("The dialog was closed", result);
    });
  }
}
