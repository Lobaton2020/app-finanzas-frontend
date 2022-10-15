import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InflowsRoutingModule } from "./inflows-routing.module";
import { InflowsComponent } from "./inflows.component";

@NgModule({
  declarations: [InflowsComponent],
  imports: [CommonModule, InflowsRoutingModule],
})
export class InflowsModule {}
