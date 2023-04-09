import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCardComponent } from './single-card.component';
import { IonicModule } from '@ionic/angular';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [SingleCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatRippleModule
  ],
  exports: [SingleCardComponent]
})
export class SingleCardModule { }
