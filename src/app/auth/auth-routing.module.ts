import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';

// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'register', component: RegisterComponent },
//     ],
//   },
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
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
