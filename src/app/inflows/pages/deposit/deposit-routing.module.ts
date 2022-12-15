import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepositListComponent } from "./components/deposit-list/deposit-list.component";

const routes: Routes = [
  {
    path: "",
    component: DepositListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositRoutingModule {}
