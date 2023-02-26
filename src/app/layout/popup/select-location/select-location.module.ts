import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLocationComponent } from './select-location.component';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SelectLocationComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [SelectLocationComponent]
})
export class SelectLocationModule { }
