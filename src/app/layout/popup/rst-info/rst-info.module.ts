import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RstInfoComponent } from './rst-info.component';
import { IonicModule } from '@ionic/angular';
import { RstButtonComponent } from '../../../component/rst-button/rst-button.component';
import { TasteRoomListModule } from '../../../component/taste-room-list/taste-room-list.module';
import { CreateTasteRoomContentModule } from '../create-taste-room-content/create-taste-room-content.module';
import { LikeButtonModule } from '../../../component/like-button/like-button.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [RstInfoComponent, RstButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    TasteRoomListModule,
    CreateTasteRoomContentModule,
    LikeButtonModule,
    ScrollingModule,
    MatRippleModule,
  ],
  exports: [RstInfoComponent, RstButtonComponent]
})
export class RstInfoModule { }
