import { Component, OnInit } from '@angular/core';
import { ChatContentComponent } from '../chat-content/chat-content.component';
import { IonNav, IonNavLink } from '@ionic/angular';

@Component({
  selector: 'app-create-chat-content',
  templateUrl: './create-chat-content.component.html',
  styleUrls: ['./create-chat-content.component.scss'],
})
export class CreateChatContentComponent implements OnInit {
  component: any;

  constructor(private ionNav: IonNav) { }

  ngOnInit() {
    this.component = ChatContentComponent;
  }
  onMove() {
    this.ionNav.pop();
    this.ionNav.push(ChatContentComponent);
  }
}
