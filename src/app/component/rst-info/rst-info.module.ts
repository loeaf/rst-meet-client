import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RstInfoComponent } from './rst-info.component';
import { IonicModule } from '@ionic/angular';
import { TasteRoomListModule } from '../taste-room-list/taste-room-list.module';



@NgModule({
  declarations: [RstInfoComponent],
  imports: [
    CommonModule,
    IonicModule,
    TasteRoomListModule
  ],
  exports: [RstInfoComponent]
})
export class RstInfoModule { }
