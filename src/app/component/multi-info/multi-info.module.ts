import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiInfoComponent } from './multi-info.component';
import { IonicModule } from '@ionic/angular';
import { RstListItemModule } from './rst-list-item/rst-list-item.module';



@NgModule({
  declarations: [MultiInfoComponent],
  imports: [
    CommonModule,
    IonicModule,
    RstListItemModule
  ],
  exports: [MultiInfoComponent]
})
export class MultiInfoModule { }
