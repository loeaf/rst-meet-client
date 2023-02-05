import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardsContentComponent } from './main-cards-content.component';
import { IonicModule } from '@ionic/angular';
import { SingleCardModule } from '../../../../component/single-card/single-card.module';



@NgModule({
  declarations: [MainCardsContentComponent],
  imports: [
    CommonModule,
    IonicModule,
    SingleCardModule
  ],
  exports: [MainCardsContentComponent]
})
export class MainCardsContentModule { }
