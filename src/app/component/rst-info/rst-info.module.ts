import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RstInfoComponent } from './rst-info.component';
import { IonicModule } from '@ionic/angular';
import { TasteRoomListModule } from '../taste-room-list/taste-room-list.module';
import { CreateChatContentModule } from '../../layout/tabs/tab1/create-chat-content/create-chat-content.module';



@NgModule({
  declarations: [RstInfoComponent],
  imports: [
    CommonModule,
    IonicModule,
    TasteRoomListModule,
    CreateChatContentModule
  ],
  exports: [RstInfoComponent]
})
export class RstInfoModule { }