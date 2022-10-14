import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InflowsRoutingModule } from "./inflows-routing.module";
import { InflowsComponent } from "./inflows.component";
import { TypesListComponent } from './pages/types/types-list.component';

@NgModule({
  declarations: [InflowsComponent, TypesListComponent],
  imports: [CommonModule, InflowsRoutingModule],
})
export class InflowsModule {}
