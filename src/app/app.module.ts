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
import { RstInfoModule } from './layout/popup/rst-info/rst-info.module';
import {
  CreateTasteRoomContentModule
} from './layout/popup/create-taste-room-content/create-taste-room-content.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListContentModule } from './layout/tabs/tab2/list-content/list-content.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    SignupModule,
    NologinIntroModule,
    HttpClientModule,
    ChatContentModule,
    UserNoticeModule,
    SelectLocationModule,
    RstInfoModule,
    CreateTasteRoomContentModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
