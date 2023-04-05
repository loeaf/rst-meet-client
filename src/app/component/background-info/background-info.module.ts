import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundInfoComponent } from './background-info.component';



@NgModule({
  declarations: [BackgroundInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [BackgroundInfoComponent]
})
export class BackgroundInfoModule { }
