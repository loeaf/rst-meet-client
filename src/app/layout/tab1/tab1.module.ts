import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { MultiInfoModule } from '../../component/multi-info/multi-info.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    MultiInfoModule,
  ],
  exports: [
    MainPageContentComponent
  ],
  declarations: [Tab1Page, MainPageContentComponent]
})
export class Tab1PageModule {}
