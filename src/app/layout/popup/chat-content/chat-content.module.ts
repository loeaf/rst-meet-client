import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChatContentComponent } from './chat-content.component';
import { ChatListModule } from '../../../component/chat-list/chat-list.module';



@NgModule({
  declarations: [ChatContentComponent],
  imports: [
    CommonModule,
    IonicModule,
    ChatListModule,
  ],
  exports: [ChatContentComponent]
})
export class ChatContentModule { }
