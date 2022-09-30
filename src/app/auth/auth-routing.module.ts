import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { RouteLogin, RouteRegister } from "../shared/config/routes";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: RouteLogin,
        component: LoginComponent,
      },
      {
        path: RouteRegister,
        component: RegisterComponent,
      },
    ],
  },
  // {
  //   path: "logout",
  //   component: NbLogoutComponent,
  // },
  // {
  //   path: "request-password",
  //   component: NbRequestPasswordComponent,
  // },
  // {
  //   path: "reset-password",
  //   component: NbResetPasswordComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
