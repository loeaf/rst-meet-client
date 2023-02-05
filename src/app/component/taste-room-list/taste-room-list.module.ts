import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasteRoomListComponent } from './taste-room-list.component';
import { IonicModule } from '@ionic/angular';
import { TasteListItemModule } from './taste-list-item/taste-list-item.module';



@NgModule({
  declarations: [TasteRoomListComponent],
  imports: [
    CommonModule,
    IonicModule,
    TasteListItemModule,
  ],
  exports: [
    TasteRoomListComponent
  ]
})
export class TasteRoomListModule { }
