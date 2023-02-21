import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { TasteRoom } from '../../../../model/taste-room';

@Component({
  selector: 'app-mychat-list-content',
  templateUrl: './mychat-list-content.component.html',
  styleUrls: ['./mychat-list-content.component.scss'],
})
export class MychatListContentComponent implements OnInit, AfterViewInit {
  @Output() onClickItem = new EventEmitter<any>();
  tasteRooms: TasteRoom[] = [];

  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
  }

  async getChatList() {
    await this.httpClient.get(environment.apiServer + '/TasteRoom/my').subscribe((p: any) => {
      this.tasteRooms = p.data;
    })
  }

  async ngAfterViewInit () {
    await this.getChatList();
  }
}
