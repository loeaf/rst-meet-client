import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapContentComponent } from './map-content.component';



@NgModule({
  declarations: [MapContentComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MapContentComponent]
})
export class MapContentModule { }
