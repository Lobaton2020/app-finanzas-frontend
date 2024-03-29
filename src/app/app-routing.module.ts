import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import * as RoutesApp from "./shared/config/routes";
const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: RoutesApp.RouteHome,
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: RoutesApp.RouteInflows,
        loadChildren: () =>
          import("./inflows/inflows.module").then((m) => m.InflowsModule),
        canActivate: [AuthGuard],
      },
      {
        path: RoutesApp.RouteMovements,
        loadChildren: () =>
          import("./movements/movements.module").then((m) => m.MovementsModule),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: RoutesApp.RouteAuthModule,
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    // canDeactivate: [AuthGuard],
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
