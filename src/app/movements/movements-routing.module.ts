import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovementCreateComponent } from "./components/movement-create/movement-create.component";
import { MovementLayoutComponent } from "./components/movement-layout/movement-layout.component";

const routes: Routes = [
  { path: "", component: MovementLayoutComponent },
  { path: "create", component: MovementCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementsRoutingModule {}
