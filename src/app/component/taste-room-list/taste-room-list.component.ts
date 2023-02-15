import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TasteRoomContentService } from '../../layout/tabs/tab1/taste-room-content/taste-room-content.service';
import { TasteRoom } from '../../model/taste-room';
import { ComponentFixture } from '@angular/core/testing';
import { ChatContentComponent } from '../../layout/tabs/tab1/chat-content/chat-content.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-taste-room-list',
  templateUrl: './taste-room-list.component.html',
  styleUrls: ['./taste-room-list.component.scss'],
})
export class TasteRoomListComponent implements OnInit, OnDestroy {
  component: any;
  tasteRoomList: TasteRoom[] = [];

  constructor(private tasteRoomContentSvc: TasteRoomContentService,
              private httpClient: HttpClient, public navParams : NavParams
              ) { }

  ngOnInit() {
    this.component = ChatContentComponent;
    const obj = this.navParams.get("uuid");
    // @todo 어떤 방에 대한 목록인지 표출해야함..
    this.httpClient.get(environment.apiServer+"/TasteRoom").subscribe((p: any) => {
      this.tasteRoomList = p.data;
    })
  }

  ngOnDestroy (): void {
  }

}
