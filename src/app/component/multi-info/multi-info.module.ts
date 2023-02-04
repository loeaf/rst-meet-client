import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiInfoComponent } from './multi-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MultiInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MultiInfoComponent]
})
export class MultiInfoModule { }
