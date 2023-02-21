import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';
import { AuthInterceptor } from '../../config/AuthInterceptor';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LoginComponent],
  providers: [AuthInterceptor]
})
export class LoginModule { }
