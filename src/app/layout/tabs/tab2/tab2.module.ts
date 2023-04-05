import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { MapContentModule } from './map-content/map-content.module';
import { Tab1PageModule } from '../tab1/tab1.module';
import { HeaderInfoModule } from '../../../component/header-info/header-info.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    MapContentModule,
    Tab1PageModule,
    HeaderInfoModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
