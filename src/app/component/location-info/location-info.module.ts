import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationInfoComponent } from './location-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [LocationInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LocationInfoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LocationInfoModule { }
