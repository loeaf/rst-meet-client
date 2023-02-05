import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateChatContentComponent } from './create-chat-content.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CreateChatContentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CreateChatContentComponent]
})
export class CreateChatContentModule { }
