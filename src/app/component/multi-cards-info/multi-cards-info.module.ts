import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiCardsInfoComponent } from './multi-cards-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MultiCardsInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MultiCardsInfoComponent]
})
export class MultiCardsInfoModule { }
