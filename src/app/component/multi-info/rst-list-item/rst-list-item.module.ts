import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RstListItemComponent } from './rst-list-item.component';
import { IonicModule } from '@ionic/angular';
import { LocationInfoModule } from '../../location-info/location-info.module';
import { HttpClientModule } from '@angular/common/http';
import { RstInfoModule } from '../../../layout/popup/rst-info/rst-info.module';


@NgModule({
  declarations: [RstListItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    RstInfoModule,
    LocationInfoModule
  ],
  exports: [RstListItemComponent],
  providers: []
})
export class RstListItemModule { }
