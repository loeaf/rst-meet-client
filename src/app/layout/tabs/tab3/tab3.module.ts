import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { MychatListContentComponent } from './mychat-list-content/mychat-list-content.component';
import { ChatListModule } from '../../../component/chat-list/chat-list.module';
import { TasteListItemModule } from '../../../component/taste-room-list/taste-list-item/taste-list-item.module';
import { MainPageContentModule } from './main-page-content/main-page-content.module';
import { MychatListContentModule } from './mychat-list-content/mychat-list-content.module';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { RstInfoModule } from '../../popup/rst-info/rst-info.module';
import { BackgroundInfoModule } from '../../../component/background-info/background-info.module';
import { LikeListContentModule } from './like-list-content/like-list-content.module';
import { LikeListContentComponent } from './like-list-content/like-list-content.component';
import { LikeButtonModule } from '../../../component/like-button/like-button.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    ChatListModule,
    TasteListItemModule,
    RstInfoModule,
    MainPageContentModule,
    MychatListContentModule,
    BackgroundInfoModule,
    LikeButtonModule
  ],
  exports: [
    MainPageContentComponent
  ],
  declarations: [Tab3Page, MainPageContentComponent, MychatListContentComponent, LikeListContentComponent]
})
export class Tab3PageModule {}
