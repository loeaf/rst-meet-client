import { Component, OnInit } from '@angular/core';
import { IonInput, IonNav, IonNavLink, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ChatContentComponent } from '../../../popup/chat-content/chat-content.component';

@Component({
  selector: 'app-create-taste-room-content',
  templateUrl: './create-taste-room-content.component.html',
  styleUrls: ['./create-taste-room-content.component.scss'],
})
export class CreateTasteRoomContentComponent implements OnInit {
  component: any;
  obj: string =  '';
  peopleNum: number = 2;
  meetPaymentType: string = 'DUTCH';

  constructor(private ionNav: IonNav,
              public navParams: NavParams,
              public httpClient: HttpClient) { }

  ngOnInit() {
    this.component = ChatContentComponent;
    this.obj = this.navParams.get("uuid");
  }

  async onMove (text: IonInput) {
    // 등록
    debugger;
    await this.httpClient.post(environment.apiServer+"/TasteRoom", {
      content: text.value,
      restaurantId: this.obj,
      peopleNum: this.peopleNum,
      meetPaymentType: this.meetPaymentType
    } ).subscribe(p => {
      this.ionNav.pop();
      this.ionNav.pop();
      this.ionNav.push(ChatContentComponent);
    })
  }
}
