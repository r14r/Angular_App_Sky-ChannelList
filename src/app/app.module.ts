import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

import { environment } from '@env/environment';
import {
  RouteReusableStrategy,
  ApiPrefixInterceptor,
  ErrorHandlerInterceptor,
  SharedModule,
} from '@shared';
import { AuthModule } from '@app/auth';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ShellModule } from './shell/module';

import { HomeModule } from './pages/home/module';
import { SkyChannelsModule } from './pages/sky-channels/module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ShellModule,
    HomeModule,
    SkyChannelsModule,
    AuthModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
    Keyboard,
    StatusBar,
    SplashScreen,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
