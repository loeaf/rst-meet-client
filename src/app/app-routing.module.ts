import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { SignupComponent } from './layout/signup/signup.component';
import { NologinIntroComponent } from './layout/nologin-intro/nologin-intro.component';
import { ChatContentComponent } from './layout/popup/chat-content/chat-content.component';
import { SelectLocationComponent } from './layout/popup/select-location/select-location.component';
import { UserNoticeComponent } from './layout/popup/user-notice/user-notice.component';
import { RstInfoComponent } from './layout/popup/rst-info/rst-info.component';
import {
  CreateTasteRoomContentComponent
} from './layout/popup/create-taste-room-content/create-taste-room-content.component';
import { MainLoginComponent } from './layout/main-login/main-login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main-login',
    component: MainLoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'nologin-intro',
    component: NologinIntroComponent,
  },
  {
    path: 'chat-content',
    component: ChatContentComponent,
  },
  {
    path: 'select-location',
    component: SelectLocationComponent,
  },
  {
    path: 'user-notice',
    component: UserNoticeComponent,
  },
  {
    path: 'rst-info',
    component: RstInfoComponent,
  },
  {
    path: 'create-chat-taste-room',
    component: CreateTasteRoomContentComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
