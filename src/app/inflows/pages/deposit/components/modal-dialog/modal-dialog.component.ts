import { Component, Inject, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { createMovementType } from "@app/movements/state/movement.action";
import { resetFormGroupValidators } from "@app/shared/helpers/resetFormGroupValidators";
import { AppState } from "@app/shared/store/app.state";
import { setLoadingSpinner } from "@app/shared/store/shared/shared.action";
import { Store } from "@ngrx/store";
import { createDeposit } from "../../state/deposit.action";

interface Actions {
  onSuccess: () => {};
}
@Component({
  selector: "app-modal-dialog",
  templateUrl: "./modal-dialog.component.html",
})
export class ModalDialogComponent implements OnInit {
  declare fg: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Actions,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.fg = this.fb.group({
      name: new FormControl("", [Validators.required, Validators.min(1)]),
    });
  }

  onSubmit() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(createDeposit({ ...this.fg.value }));
    resetFormGroupValidators(this.fg);
    this.dialogRef.close();
  }
}
