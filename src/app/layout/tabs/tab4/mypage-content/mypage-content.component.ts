import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UtilesService } from '../../../../utiles/utiles.service';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../../environments/environment';
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
    const p = await UtilesService.getGeolocation();
    alert(p);
    // navigator.geolocation.getCurrentPosition((position) => {
    //   debugger;
    //   console.log(position.coords.longitude, ',',  position.coords.latitude);
    // }, (error) => {
    //   console.log(error);
    // });
  }
}
