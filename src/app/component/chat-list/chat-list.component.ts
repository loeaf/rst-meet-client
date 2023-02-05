import { Component, OnInit } from '@angular/core';
import { ChatContentService } from '../../layout/tabs/tab1/chat-content/chat-content.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
