import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { EffectsModule } from "@ngrx/effects";
import { ReportsEffect } from "./state/home.effect";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule,
    EffectsModule.forFeature([ReportsEffect]),
  ],
})
export class HomeModule {}
