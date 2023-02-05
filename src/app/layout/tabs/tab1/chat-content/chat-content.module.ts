import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChatContentComponent } from './chat-content.component';
import { TasteRoomListModule } from '../../../../component/taste-room-list/taste-room-list.module';
import { ChatListModule } from '../../../../component/chat-list/chat-list.module';



@NgModule({
  declarations: [ChatContentComponent],
  imports: [
    CommonModule,
    IonicModule,
    TasteRoomListModule,
    ChatListModule
  ],
  exports: [ChatContentComponent]
})
export class ChatContentModule { }
