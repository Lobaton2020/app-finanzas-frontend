import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepositRoutingModule } from "./deposit-routing.module";
import { DepositListComponent } from "./components/deposit-list/deposit-list.component";
import { EffectsModule } from "@ngrx/effects";
import { DepositEffect } from "./state/deposit.effect";
import { ModalDialogComponent } from "./components/modal-dialog/modal-dialog.component";
import { MaterialUiModule } from "@app/shared/material-ui/material-ui.module";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [DepositListComponent, ModalDialogComponent],
  imports: [
    CommonModule,
    DepositRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([DepositEffect]),
  ],
  exports: [],
})
export class DepositModule {}
