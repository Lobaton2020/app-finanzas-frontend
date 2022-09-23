import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './components/deposit/deposit.component';
import { InflowTypeComponent } from './components/inflow-type/inflow-type.component';
import { InflowComponent } from './components/inflow/inflow.component';

const routes: Routes = [
  {
    path: '',
    component: InflowComponent,
  },
  {
    path: 'deposits',
    component: DepositComponent,
  },
  {
    path: 'types',
    component: InflowTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InflowRoutingModule {}
