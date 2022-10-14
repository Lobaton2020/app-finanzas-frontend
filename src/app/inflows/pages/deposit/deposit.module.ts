import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepositRoutingModule } from "./deposit-routing.module";
import { DepositListComponent } from "./components/deposit-list/deposit-list.component";
import { DepositCreateComponent } from "./components/deposit-create/deposit-create.component";

@NgModule({
  declarations: [DepositListComponent, DepositCreateComponent],
  imports: [CommonModule, DepositRoutingModule],
  exports: [DepositCreateComponent],
})
export class DepositModule {}
