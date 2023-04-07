import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MychatListContentModule } from '../mychat-list-content/mychat-list-content.module';
import { LikeButtonModule } from '../../../../component/like-button/like-button.module';
import { BackgroundInfoModule } from '../../../../component/background-info/background-info.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    MychatListContentModule,
  ]
})
export class LikeListContentModule { }
