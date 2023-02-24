import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab4Component } from './tab4.component';
import { MypageContentComponent } from './mypage-content/mypage-content.component';
import { IonicModule } from '@ionic/angular';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { RstInfoModule } from '../../../component/rst-info/rst-info.module';



@NgModule({
  declarations: [Tab4Component, MypageContentComponent],
  imports: [
    CommonModule,
    IonicModule,
    Tab4PageRoutingModule,
    RstInfoModule,
  ],
  exports: [Tab4Component]
})
export class Tab4PageModule { }
