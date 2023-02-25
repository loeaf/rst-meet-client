import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatContentService } from './chat-content.service';
import { IonNav } from '@ionic/angular';
const $ = require( "jquery" );

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit {
  @ViewChild('chatContent') chatContent?: ElementRef;

  constructor(private chatContentSvc: ChatContentService, private ionNav: IonNav) { }

  ngOnInit() {
    this.chatContentSvc.chatContentVisible.subscribe(p => {
      if (p) {
        $(this.chatContent?.nativeElement).show();
      } else {
        $(this.chatContent?.nativeElement).hide();
      }
    })
  }

  onBack () {
    this.ionNav.pop();
  }
}
