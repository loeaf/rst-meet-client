import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapContentComponent } from './map-content.component';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [MapContentComponent],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MapContentComponent]
})
export class MapContentModule { }
