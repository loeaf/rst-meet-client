import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNoticeComponent } from './user-notice.component';



@NgModule({
  declarations: [UserNoticeComponent],
  imports: [
    CommonModule
  ],
  exports: [UserNoticeComponent]
})
export class UserNoticeModule { }
