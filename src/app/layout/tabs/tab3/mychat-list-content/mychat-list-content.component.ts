import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { TasteRoom } from '../../../../model/taste-room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mychat-list-content',
  templateUrl: './mychat-list-content.component.html',
  styleUrls: ['./mychat-list-content.component.scss'],
})
export class MychatListContentComponent implements OnInit, AfterViewInit {
  tasteRooms: TasteRoom[] = [];
  component: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

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

  onClickItem () {
    this.router.navigate(['/chat-content']);
  }
}
