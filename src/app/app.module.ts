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
import { LoggerService } from './common/services/logger.service';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import {
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbThemeService,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    InflowComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }),
  ],
  providers: [
    NbThemeService,
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
