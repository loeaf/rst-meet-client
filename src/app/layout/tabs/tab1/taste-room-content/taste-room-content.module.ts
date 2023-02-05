import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasteRoomListModule } from '../../../../component/taste-room-list/taste-room-list.module';
import { TasteRoomContentComponent } from './taste-room-content.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TasteRoomContentComponent],
  imports: [
    CommonModule,
    TasteRoomListModule,
    IonicModule
  ],
  exports: [
    TasteRoomContentComponent
  ]
})
export class TasteRoomContentModule { }
