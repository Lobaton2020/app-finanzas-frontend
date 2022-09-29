import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from "@angular/router";
import { AppState } from "../shared/store/app.state";
import { Store } from "@ngrx/store";
import { logout } from "../auth/state/auth.action";


@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, RouterModule],
})
export class HomeModule {}
