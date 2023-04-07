import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatContentService } from '../../popup/chat-content/chat-content.service';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { LikeListContentComponent } from './like-list-content/like-list-content.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {
  contentType: any;
  component: any;

  constructor(private ChatContentSvc: ChatContentService) {}

  ngOnDestroy (): void {
  }

  ngOnInit (): void {
    // this.component = MainPageContentComponent;
    this.component = LikeListContentComponent;
  }
}
