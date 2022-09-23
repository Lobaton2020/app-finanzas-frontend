import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InflowRoutingModule } from './inflow-routing.module';
import { DepositComponent } from './components/deposit/deposit.component';
import { InflowTypeComponent } from './components/inflow-type/inflow-type.component';

@NgModule({
  declarations: [DepositComponent, InflowTypeComponent],
  imports: [CommonModule, InflowRoutingModule],
})
export class InflowModule {}
