import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './layout/login/login.module';
import { SignupModule } from './layout/signup/signup.module';
import { NologinIntroModule } from './layout/nologin-intro/nologin-intro.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    LoginModule,
    SignupModule,
    NologinIntroModule,
    HttpClientModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
