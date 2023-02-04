import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCardComponent } from './single-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SingleCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SingleCardComponent]
})
export class SingleCardModule { }
