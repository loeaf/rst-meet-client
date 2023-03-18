import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTasteRoomContentComponent } from './create-taste-room-content.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CreateTasteRoomContentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CreateTasteRoomContentComponent]
})
export class CreateTasteRoomContentModule { }
