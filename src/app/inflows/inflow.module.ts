import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InflowRoutingModule } from './inflow-routing.module';
import { DepositComponent } from './components/deposit/deposit.component';
import { InflowTypeComponent } from './components/inflow-type/inflow-type.component';
import { EffectsModule } from "@ngrx/effects";
import { InflowEffect } from "./state/inflow.effect";

@NgModule({
  declarations: [DepositComponent, InflowTypeComponent],
  imports: [
    CommonModule,
    InflowRoutingModule,
    EffectsModule.forFeature([InflowEffect]),
  ],
})
export class InflowModule {}
