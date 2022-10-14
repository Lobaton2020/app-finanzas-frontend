import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MovementsRoutingModule } from "./movements-routing.module";
import { MovementsComponent } from "./movements.component";
import { MovementLayoutComponent } from "./components/movement-layout/movement-layout.component";
import { MaterialUiModule } from "@app/shared/material-ui/material-ui.module";
import { MovementListComponent } from "./components/movement-list/movement-list.component";

@NgModule({
  declarations: [
    MovementListComponent,
    MovementsComponent,
    MovementLayoutComponent,
  ],
  imports: [CommonModule, MaterialUiModule, MovementsRoutingModule],
})
export class MovementsModule {}
