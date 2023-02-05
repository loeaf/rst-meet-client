import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit {
  chatContentType: string = ChatContentType.ChatRoomAfter;

  constructor(private ionNav: IonNav) { }

  ngOnInit() {}

}

export enum ChatContentType {
  ChatRoomAfter = '1',
  RegistAfter = '2',
}
