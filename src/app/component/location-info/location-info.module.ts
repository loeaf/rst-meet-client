import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationInfoComponent } from './location-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [LocationInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LocationInfoComponent]
})
export class LocationInfoModule { }
