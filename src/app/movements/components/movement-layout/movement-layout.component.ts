import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  selectControl!: string;
  movementsTypeIngress$!: Observable<EntityListResponse<MovementType>>;
  movementsTypeEgress$!: Observable<EntityListResponse<MovementType>>;
  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>,
  ) {
    router.events.forEach((event) => {
      this.verifyIndex();
      // this.loadTabDependsUserSee(this.selectedIndex)
    });
  }

  ngOnInit(): void {
    this.verifyIndex();
    this.loadTabDependsUserSee(this.selectedIndex);
  }
  verifyIndex() {
    this.selectedIndex = window.location.hash?.toLowerCase().includes(TYPE_EGRESS.toLowerCase()) ? 1 : 0;
    this.setSelectedMovementType()
  }
  setSelectedMovementType() {
    this.selectControl = !!this.selectedIndex ? TYPE_EGRESS : TYPE_INGRESS
  }
  loadTabDependsUserSee(selectedIndex: number) {
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
    this.setSelectedMovementType()
    this.loadTabDependsUserSee(this.selectedIndex);

  }
}
