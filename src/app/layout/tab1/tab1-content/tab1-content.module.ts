import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1ContentComponent } from './tab1-content.component';
import { IonicModule } from '@ionic/angular';
import { Tab1PageModule } from '../tab1.module';



@NgModule({
  declarations: [Tab1ContentComponent],
  imports: [
    CommonModule,
    IonicModule,
    Tab1PageModule
  ],
  exports: [Tab1ContentComponent]
})
export class Tab1ContentModule { }
