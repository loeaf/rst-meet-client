import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderInfoComponent } from './header-info.component';



@NgModule({
  declarations: [HeaderInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderInfoComponent]
})
export class HeaderInfoModule { }
