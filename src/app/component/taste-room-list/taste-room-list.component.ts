import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TasteRoomContentService } from '../../layout/tabs/tab1/taste-room-content/taste-room-content.service';
import { TasteRoom } from '../../model/taste-room';
import { ComponentFixture } from '@angular/core/testing';
import { ChatContentComponent } from '../../layout/tabs/tab1/chat-content/chat-content.component';

@Component({
  selector: 'app-taste-room-list',
  templateUrl: './taste-room-list.component.html',
  styleUrls: ['./taste-room-list.component.scss'],
})
export class TasteRoomListComponent implements OnInit, OnDestroy {
  component: any;

  constructor(private tasteRoomContentSvc: TasteRoomContentService) { }

  ngOnInit() {
    this.component = ChatContentComponent;
  }

  ngOnDestroy (): void {
  }

  onClickItem (selectRoom: TasteRoom) {
    //emit
    this.tasteRoomContentSvc.emitTasteRoomSelected(selectRoom);
  }
}
