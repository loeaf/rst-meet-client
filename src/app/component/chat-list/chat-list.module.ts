import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ChatListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ChatListComponent]
})
export class ChatListModule { }
