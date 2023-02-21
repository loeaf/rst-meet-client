import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { IonicModule } from '@ionic/angular';
import { AuthInterceptor } from '../../config/AuthInterceptor';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SignupComponent],
  providers: [AuthInterceptor]
})
export class SignupModule { }
