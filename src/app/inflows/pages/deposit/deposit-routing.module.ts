import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepositCreateComponent } from "./components/deposit-create/deposit-create.component";
import { DepositListComponent } from "./components/deposit-list/deposit-list.component";

const routes: Routes = [
  {
    path: "",
    component: DepositListComponent,
  },
  {
    path: "create",
    component: DepositCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositRoutingModule {}
