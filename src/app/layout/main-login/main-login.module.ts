import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLoginComponent } from './main-login.component';
import { BackgroundInfoModule } from '../../component/background-info/background-info.module';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [MainLoginComponent],
  imports: [
    CommonModule,
    BackgroundInfoModule,
    MatRippleModule
  ],
  exports: [MainLoginComponent]
})
export class MainLoginModule { }
