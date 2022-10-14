import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InflowRoutingModule } from "./inflow-routing.module";
import { EffectsModule } from "@ngrx/effects";
import { InflowEffect } from "./state/inflow.effect";
import { InflowCreateComponent } from "./components/inflow-create/inflow-create.component";
import { InflowListComponent } from "./components/inflow-list/inflow.component";
import { MaterialUiModule } from "src/app/shared/material-ui/material-ui.module";

@NgModule({
  declarations: [InflowCreateComponent, InflowListComponent],
  imports: [
    CommonModule,
    MaterialUiModule,
    InflowRoutingModule,
    EffectsModule.forFeature([InflowEffect]),
  ],
})
export class InflowModule {}
