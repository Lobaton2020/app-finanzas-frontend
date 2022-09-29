import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { InflowComponent } from './inflows/components/inflow/inflow.component';
import { HomeComponent } from './home/components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { TimerInterceptor } from './common/interceptors/timer.interceptor';
import { ErrorInterceptor } from './common/interceptors/error.interceptor';
import { LoggerService } from "./common/services/logger.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialUiModule } from "./shared/material-ui/material-ui.module";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffect } from "./auth/state/auth.effect";
import { StoreModule } from "@ngrx/store";
import { appReducer } from "./shared/store/app.state";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { CustomSerializer } from "./shared/store/router/custom-serializer";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    InflowComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialUiModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    EffectsModule.forRoot([AuthEffect]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  providers: [
    LoggerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
