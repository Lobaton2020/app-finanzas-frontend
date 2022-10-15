import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  TYPE_EGRESS,
  TYPE_INGRESS,
} from "@app/movements/services/movement-type.service";
import { createMovementType } from "@app/movements/state/movement.action";
import { AppState } from "@app/shared/store/app.state";
import { setLoadingSpinner } from "@app/shared/store/shared/shared.action";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-movement-create",
  templateUrl: "./movement-create.component.html",
  styleUrls: ["./movement-create.component.scss"],
})
export class MovementCreateComponent implements OnInit {
  fg!: FormGroup;
  movementsType: { key: string; value: string }[] = [
    {
      key: TYPE_INGRESS,
      value: "Ingreso",
    },
    {
      key: TYPE_EGRESS,
      value: "Egreso",
    },
  ];
  constructor(
    private readonly store: Store<AppState>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fg = this.fb.group({
      name: new FormControl("", [Validators.required, Validators.min(1)]),
      selectControl: new FormControl("", [Validators.required]),
    });
  }
  onSubmit() {
    this.fg.reset();
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(createMovementType(this.fg.value));
  }
}
