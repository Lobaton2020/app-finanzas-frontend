import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/store/app.state";
import { Observable } from "rxjs";
import { getInflows } from "../../state/inflow.select";
import { loadInflows } from "../../state/inflow.action";
@Component({
  selector: "app-inflow",
  templateUrl: "./inflow.component.html",
  styleUrls: ["./inflow.component.css"],
})
export class InflowListComponent implements OnInit {
  inflows$!: Observable<any>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadInflows());
    this.inflows$ = this.store.select(getInflows);
  }

  load() {
    this.store.dispatch(loadInflows());
  }
}
