import { Component, OnInit } from '@angular/core';
import { ChatContentComponent } from '../chat-content/chat-content.component';
import { IonInput, IonNav, IonNavLink, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-create-taste-room-content',
  templateUrl: './create-taste-room-content.component.html',
  styleUrls: ['./create-taste-room-content.component.scss'],
})
export class CreateTasteRoomContentComponent implements OnInit {
  component: any;
  uuid: string =  '';

  constructor(private ionNav: IonNav,
              public navParams: NavParams,
              public httpClient: HttpClient) { }

  ngOnInit() {
    this.component = ChatContentComponent;
    this.uuid = this.navParams.get("uuid");
  }

  async onMove (text: IonInput) {
    // 등록
    debugger;
    await this.httpClient.post(environment.apiServer+"/TasteRoom", {
      content: text.value,
      restaurantId: this.uuid
    } ).subscribe(p => {
      this.ionNav.pop();
      this.ionNav.pop();
      this.ionNav.push(ChatContentComponent);
    })
  }
}
