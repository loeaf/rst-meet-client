import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab4Component } from './tab4.component';
import { MypageContentComponent } from './mypage-content/mypage-content.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [Tab4Component, MypageContentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [Tab4Component]
})
export class Tab4PageModule { }
