import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialUiModule } from "../shared/material-ui/material-ui.module";
import { EffectsModule } from "@ngrx/effects";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";
import { AuthEffect } from "./state/auth.effect";
@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUiModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
})
export class AuthModule {}
