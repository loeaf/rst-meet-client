import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mychat-list-content',
  templateUrl: './mychat-list-content.component.html',
  styleUrls: ['./mychat-list-content.component.scss'],
})
export class MychatListContentComponent implements OnInit {
  @Output() onClickItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

}
