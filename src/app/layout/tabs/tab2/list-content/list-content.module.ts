import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContentComponent } from './list-content.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [ListContentComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    MatRippleModule
  ],
  exports: [ListContentComponent]
})
export class ListContentModule { }
