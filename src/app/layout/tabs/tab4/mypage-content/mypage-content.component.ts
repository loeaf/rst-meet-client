import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UtilesService } from '../../../../utiles/utiles.service';
import { AlertController } from '@ionic/angular';
import { fromLonLat } from 'ol/proj';
@Component({
  selector: 'app-mypage-content',
  templateUrl: './mypage-content.component.html',
  styleUrls: ['./mypage-content.component.scss'],
})
export class MypageContentComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient, private alertController: AlertController) { }

  ngOnInit() {}

  onSingup () {
    this.router.navigate(['/login']);
  }

  async test () {
    const resp: any = await UtilesService.getGeolocation();
    console.log(resp);
    const lonLat = [resp.coords.longitude, resp.coords.latitude];
  }

  async onLogout () {
    UtilesService.localStogareClear();
    await this.router.navigate(['/tabs/tab1']);
  }

  isLogin () {
    return UtilesService.isLogin();

  }

  async onLogin () {
    await this.router.navigate(['/main-login']);
  }

  moveTermsUse () {
    window.open('https://dt-dev.notion.site/5c2405c68a0f4d8190d9a8ad64f08669');
  }

  personalInfo () {
    window.open('https://dt-dev.notion.site/cd0ca8158b27463c94ffb90b6713c466');
  }
}
