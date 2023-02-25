import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { MychatListContentComponent } from './mychat-list-content/mychat-list-content.component';
import { ChatListModule } from '../../../component/chat-list/chat-list.module';
import { TasteListItemModule } from '../../../component/taste-room-list/taste-list-item/taste-list-item.module';
import { RstInfoModule } from '../../../component/rst-info/rst-info.module';
import { MainPageContentModule } from './main-page-content/main-page-content.module';
import { MychatListContentModule } from './mychat-list-content/mychat-list-content.module';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';

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
    MychatListContentModule
  ],
  exports: [
    MainPageContentComponent
  ],
  declarations: [Tab3Page, MainPageContentComponent, MychatListContentComponent]
})
export class Tab3PageModule {}
