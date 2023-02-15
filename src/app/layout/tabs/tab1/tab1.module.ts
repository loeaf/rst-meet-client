import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { MultiInfoModule } from '../../../component/multi-info/multi-info.module';
import { TasteRoomContentModule } from './taste-room-content/taste-room-content.module';
import { ChatContentModule } from './chat-content/chat-content.module';
import { MainCardsContentModule } from './main-cards-content/main-cards-content.module';

@NgModule({
  declarations: [Tab1Page, MainPageContentComponent],
  exports: [
    MainPageContentComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    MultiInfoModule,
    TasteRoomContentModule,
    ChatContentModule,
    MainCardsContentModule
  ]
})
export class Tab1PageModule {}
