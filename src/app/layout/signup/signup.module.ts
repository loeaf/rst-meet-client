import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { IonicModule } from '@ionic/angular';
import { AuthInterceptor } from '../../config/AuthInterceptor';
import { BackgroundInfoModule } from '../../component/background-info/background-info.module';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    IonicModule,
    BackgroundInfoModule
  ],
  exports: [SignupComponent],
  providers: [AuthInterceptor]
})
export class SignupModule { }
