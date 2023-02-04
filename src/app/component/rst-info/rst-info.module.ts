import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RstInfoComponent } from './rst-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RstInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RstInfoComponent]
})
export class RstInfoModule { }
