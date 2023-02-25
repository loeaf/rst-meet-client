import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './layout/login/login.module';
import { SignupModule } from './layout/signup/signup.module';
import { NologinIntroModule } from './layout/nologin-intro/nologin-intro.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './config/AuthInterceptor';
import { ChatContentModule } from './layout/popup/chat-content/chat-content.module';
import { UserNoticeModule } from './layout/popup/user-notice/user-notice.module';
import { SelectLocationModule } from './layout/popup/select-location/select-location.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    LoginModule,
    SignupModule,
    NologinIntroModule,
    HttpClientModule,
    ChatContentModule,
    UserNoticeModule,
    SelectLocationModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
