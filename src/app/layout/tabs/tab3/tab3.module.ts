import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { MychatListContentComponent } from './mychat-list-content/mychat-list-content.component';
import { ChatListModule } from '../../../component/chat-list/chat-list.module';
import { TasteListItemModule } from '../../../component/taste-room-list/taste-list-item/taste-list-item.module';
import { MychatChatContentModule } from './mychat-chat-content/mychat-chat-content.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    ChatListModule,
    TasteListItemModule,
    MychatChatContentModule
  ],
  declarations: [Tab3Page, MychatListContentComponent]
})
export class Tab3PageModule {}
