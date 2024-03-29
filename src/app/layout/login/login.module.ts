import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';
import { AuthInterceptor } from '../../config/AuthInterceptor';
import { BackgroundInfoModule } from '../../component/background-info/background-info.module';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    BackgroundInfoModule,
    MatRippleModule
  ],
  exports: [LoginComponent],
  providers: [AuthInterceptor]
})
export class LoginModule { }
