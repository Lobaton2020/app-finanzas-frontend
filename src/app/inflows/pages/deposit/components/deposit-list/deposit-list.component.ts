import { Component, OnInit } from "@angular/core";
import { AppState } from "@app/shared/store/app.state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadDeposits } from "../../state/deposit.action";
import { getDesposits } from "../../state/deposit.select";
import { Deposit } from "../../state/deposit.state";

@Component({
  selector: "app-deposit-list",
  templateUrl: "./deposit-list.component.html",
  styleUrls: ["./deposit-list.component.scss"],
})
export class DepositListComponent implements OnInit {
  deposits$!: Observable<Deposit[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(
      loadDeposits({
        page: 0,
        limit: 100,
      })
    );
    this.deposits$ = this.store.select(getDesposits);
  }
}
