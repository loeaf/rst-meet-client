import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TasteRoomContentService } from '../../layout/tabs/tab1/taste-room-content/taste-room-content.service';
import { TasteRoom } from '../../model/taste-room';
import { ComponentFixture } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NavParams } from '@ionic/angular';
import { UtilesService } from '../../utiles/utiles.service';
import { ChatContentComponent } from '../../layout/popup/chat-content/chat-content.component';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taste-room-list',
  templateUrl: './taste-room-list.component.html',
  styleUrls: ['./taste-room-list.component.scss'],
})
export class TasteRoomListComponent implements OnInit, OnDestroy {
  // component: any;
  @Input()
  tasteRoomList: TasteRoom[] = [];

  constructor(private tasteRoomContentSvc: TasteRoomContentService,
              private httpClient: HttpClient,
              private router: Router,
              // public navParams : NavParams
              ) { }

  async ngOnInit() {
    // this.component = ChatContentComponent;
    // const obj = this.navParams.get("tasteRoomInfo");
    // const id = location.search.replace('?rstInfo=', '');
    // try {
    //   const p: any = await lastValueFrom(this.httpClient.get(environment.apiServer + ''+`/TasteRoom?restaurantId=${id}`))
    //   this.tasteRoomList = p.data;
    // } catch (error) {
    //   console.log(error);
    //   UtilesService.tokenCheck(error);
    // }
  }

  ngOnDestroy (): void {
  }

  async onClickItem (obj: TasteRoom) {
    // 현재 내가 들어갈 수 있는 방인지 들어가기전 다시 체크
    try {
      const p = await lastValueFrom(this.httpClient.post(environment.apiServer + ''+`/TasteRoomMember`, {
        tasteRoomId: obj.id
      }))
      console.log(p);
      if (p) {
        await this.router.navigate(['/chat-content'], { queryParams: { tasteRoomId: obj.id } });
      }
    } catch (e) {
      console.log(e);
      UtilesService.tokenCheck(e);
    }
  }

  async onClickItemEnd (obj: TasteRoom) {
    alert('해당방에 입장할 수 없습니다.')
  }
}
