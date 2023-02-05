import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasteListItemComponent } from './taste-list-item.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TasteListItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TasteListItemComponent]
})
export class TasteListItemModule { }
