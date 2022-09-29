import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { NotFoundComponent } from './common/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    // canDeactivate: [AuthGuard],
  },
  {
    path: "inflows",
    loadChildren: () =>
      import("./inflows/inflow.module").then((m) => m.InflowModule),
    canActivate: [AuthGuard],
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
