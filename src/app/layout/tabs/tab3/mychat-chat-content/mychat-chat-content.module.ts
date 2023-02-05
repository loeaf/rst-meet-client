import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MychatChatContentComponent } from './mychat-chat-content.component';
import { IonicModule } from '@ionic/angular';
import { ChatListModule } from '../../../../component/chat-list/chat-list.module';



@NgModule({
  declarations: [MychatChatContentComponent],
  imports: [
    CommonModule,
    IonicModule,
    ChatListModule
  ],
  exports: [MychatChatContentComponent]
})
export class MychatChatContentModule { }
