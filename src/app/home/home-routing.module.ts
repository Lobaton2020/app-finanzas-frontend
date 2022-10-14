import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiModule } from '../shared/material-ui/material-ui.module';
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [MaterialUiModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
