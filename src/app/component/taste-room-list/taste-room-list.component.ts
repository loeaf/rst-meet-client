import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TasteRoomContentService } from '../../layout/tabs/tab1/taste-room-content/taste-room-content.service';
import { TasteRoom } from '../../model/taste-room';
import { ComponentFixture } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NavParams } from '@ionic/angular';
import { UtilesService } from '../../utiles/utiles.service';
import { ChatContentComponent } from '../../layout/popup/chat-content/chat-content.component';

@Component({
  selector: 'app-taste-room-list',
  templateUrl: './taste-room-list.component.html',
  styleUrls: ['./taste-room-list.component.scss'],
})
export class TasteRoomListComponent implements OnInit, OnDestroy {
  component: any;
  tasteRoomList: TasteRoom[] = [];

  constructor(private tasteRoomContentSvc: TasteRoomContentService,
              private httpClient: HttpClient,
              // public navParams : NavParams
              ) { }

  ngOnInit() {
    this.component = ChatContentComponent;
    // const obj = this.navParams.get("tasteRoomInfo");
    const obj: any = {};
    this.httpClient.get(environment.apiServer + ''+`/TasteRoom?restaurantId=${obj.id}`).subscribe((p: any) => {
      this.tasteRoomList = p.data;
    }, error => {
      console.log(error);
      UtilesService.tokenCheck(error);
    })
  }

  ngOnDestroy (): void {
  }

  async onClickItem (obj: TasteRoom) {
    await this.httpClient.post(environment.apiServer + ''+`/TasteRoomMember`, {
      tasteRoomId: obj.id
    }).subscribe(p => {
      console.log(p);
    }, error => {
      console.log(error);
      UtilesService.tokenCheck(error);
    })
  }

  async onClickItemEnd (obj: TasteRoom) {
    alert('해당방에 입장할 수 없습니다.')
  }
}
