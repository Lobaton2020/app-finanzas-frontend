import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InflowsComponent } from "./inflows.component";
import * as AppRoutes from "@app/shared/config/routes";

const routes: Routes = [
  {
    path: "",
    component: InflowsComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/inflow/inflow.module").then((m) => m.InflowModule),
      },
      {
        path: AppRoutes.RouteDeposits,
        loadChildren: () =>
          import("./pages/deposit/deposit.module").then((m) => m.DepositModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InflowsRoutingModule {}
