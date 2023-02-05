import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {
  contentType: any;

  constructor() {}

  ngOnDestroy (): void {
  }

  ngOnInit (): void {
    this.contentType = Page3ContentType.MyChatList;
  }

  subClickItem () {
    this.contentType = Page3ContentType.ChatList;
  }

  onBack () {
    this.contentType = Page3ContentType.MyChatList;
  }
}
export enum Page3ContentType {
  MyChatList = 'MyChatList',
  ChatList = 'ChatList',
}
