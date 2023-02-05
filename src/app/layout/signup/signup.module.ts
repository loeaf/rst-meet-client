import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SignupComponent]
})
export class SignupModule { }
