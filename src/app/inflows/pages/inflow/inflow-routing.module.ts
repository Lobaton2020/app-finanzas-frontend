import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InflowCreateComponent } from "./components/inflow-create/inflow-create.component";
import { InflowListComponent } from "./components/inflow-list/inflow.component";

const routes: Routes = [
  {
    path: "",
    component: InflowListComponent,
  },
  {
    path: "create",
    component: InflowCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InflowRoutingModule {}
