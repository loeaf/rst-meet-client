import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageContentComponent } from './main-page-content.component';
import { IonicModule } from '@ionic/angular';
import { MychatListContentModule } from '../mychat-list-content/mychat-list-content.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    MychatListContentModule,
  ],
  exports: []
})
export class MainPageContentModule { }
