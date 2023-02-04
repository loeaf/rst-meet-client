import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInfoComponent } from './item-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ItemInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ItemInfoComponent]
})
export class ItemInfoModule { }
