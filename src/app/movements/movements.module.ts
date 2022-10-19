import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MovementsRoutingModule } from "./movements-routing.module";
import { MovementsComponent } from "./movements.component";
import { MovementLayoutComponent } from "./components/movement-layout/movement-layout.component";
import { MaterialUiModule } from "@app/shared/material-ui/material-ui.module";
import { MovementListComponent } from "./components/movement-list/movement-list.component";
import { MovementCreateComponent } from "./components/movement-create/movement-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { MovementTypeEffect } from "./state/movement.effect";
import { MovementEditComponent } from './components/movement-edit/movement-edit.component';

@NgModule({
  declarations: [
    MovementListComponent,
    MovementsComponent,
    MovementCreateComponent,
    MovementLayoutComponent,
    MovementEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialUiModule,
    MovementsRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([MovementTypeEffect]),
  ],
})
export class MovementsModule {}
