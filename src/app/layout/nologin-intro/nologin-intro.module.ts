import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NologinIntroComponent } from './nologin-intro.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NologinIntroComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NologinIntroComponent]
})
export class NologinIntroModule { }
