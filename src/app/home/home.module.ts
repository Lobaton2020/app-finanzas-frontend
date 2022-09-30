import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, SharedModule, RouterModule],
})
export class HomeModule {}
