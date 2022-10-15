import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovementType } from "@app/movements/models/moovementListReponse";
import {
  TYPE_EGRESS,
  TYPE_INGRESS,
} from "@app/movements/services/movement-type.service";
import {
  loadMovementEgress,
  loadMovementIngress,
} from "@app/movements/state/movement.action";
import {
  getMovementTypeEgress,
  getMovementTypeIngress,
} from "@app/movements/state/movement.select";
import { EntityListResponse } from "@app/shared/pagination/meta.interface";
import { AppState } from "@app/shared/store/app.state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
@Component({
  selector: "app-movement-layout",
  templateUrl: "./movement-layout.component.html",
  styleUrls: ["./movement-layout.component.scss"],
})
export class MovementLayoutComponent implements OnInit {
  selectedIndex!: number;
  movementsTypeIngress$!: Observable<EntityListResponse<MovementType>>;
  movementsTypeEgress$!: Observable<EntityListResponse<MovementType>>;
  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {
    router.events.forEach((event) => {
      this.verifyIndex();
      // this.loadTabDependsUserSee(this.selectedIndex)
    });
  }

  ngOnInit(): void {
    this.verifyIndex();
    console.log("HELOOOO");
    this.loadTabDependsUserSee(this.selectedIndex);
  }
  verifyIndex() {
    this.selectedIndex = window.location.hash.includes("#egresos") ? 1 : 0;
  }
  loadTabDependsUserSee(selectedIndex: number) {
    console.log("LOAD DEPENDECIES");
    if (selectedIndex == 1) {
      this.store.dispatch(loadMovementEgress({ selectControl: TYPE_EGRESS }));
      this.movementsTypeEgress$ = this.store.select(getMovementTypeEgress);
      return;
    }
    this.store.dispatch(loadMovementIngress({ selectControl: TYPE_INGRESS }));
    this.movementsTypeIngress$ = this.store.select(getMovementTypeIngress);
  }
  handleChangeTab(index: number) {
    this.selectedIndex = index;
    this.loadTabDependsUserSee(this.selectedIndex);
  }
}
