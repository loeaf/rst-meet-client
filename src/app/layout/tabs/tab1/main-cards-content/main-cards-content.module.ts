import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardsContentComponent } from './main-cards-content.component';
import { IonicModule } from '@ionic/angular';
import { SingleCardModule } from '../../../../component/single-card/single-card.module';
import { MultiCardsInfoModule } from '../../../../component/multi-cards-info/multi-cards-info.module';



@NgModule({
  declarations: [MainCardsContentComponent],
  imports: [
    CommonModule,
    IonicModule,
    SingleCardModule,
    MultiCardsInfoModule
  ],
  exports: [MainCardsContentComponent]
})
export class MainCardsContentModule { }
