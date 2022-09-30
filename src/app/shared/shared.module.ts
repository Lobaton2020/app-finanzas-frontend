import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { SharedEffect } from "./store/shared/shared.effect";
import { LoggerService } from "./services/logger.service";
import { RequestHttpService } from "./services/request-http.service";
import { HttpClientModule } from "@angular/common/http";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { MaterialUiModule } from "./material-ui/material-ui.module";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [SidenavComponent, AdminLayoutComponent, ToolbarComponent, FooterComponent],
  providers: [LoggerService, RequestHttpService],
  imports: [
    CommonModule,
    RouterModule,
    MaterialUiModule,
    HttpClientModule,
    EffectsModule.forFeature([SharedEffect]),
  ],
  exports: [SidenavComponent],
})
export class SharedModule {}
