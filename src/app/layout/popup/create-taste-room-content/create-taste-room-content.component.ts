import { Component, OnInit } from '@angular/core';
import { IonInput, IonNav, IonNavLink, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

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

  constructor(public router: Router,
              public httpClient: HttpClient) { }

  ngOnInit() {
    const id = location.search.replace('?rstInfoId=', '');
    this.obj = id;
  }

  async onMove (text: IonInput) {
    // 등록
    await this.httpClient.post(environment.apiServer + ''+"/TasteRoom", {
      content: text.value,
      restaurantId: this.obj,
      peopleNum: this.peopleNum,
      meetPaymentType: this.meetPaymentType
    } ).subscribe(p => {
      this.router.navigate(['/chat-content']);
    })
  }
}
