import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UtilesService } from '../../../../utiles/utiles.service';
import { AlertController } from '@ionic/angular';
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
    const p: any = await UtilesService.getGeolocation();
    console.log(p.coords.longitude, ',',  p.coords.latitude);
    // navigator.geolocation.getCurrentPosition((position) => {
    //   debugger;
    //   console.log(position.coords.longitude, ',',  position.coords.latitude);
    // }, (error) => {
    //   console.log(error);
    // });
  }

  async onLogout () {
    UtilesService.localStogareClear();
    await this.router.navigate(['/tabs/tab1']);
  }

  isLogin () {
    return UtilesService.isLogin();

  }

  async onLogin () {
    await this.router.navigate(['/login']);
  }
}
