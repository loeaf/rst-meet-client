import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonInput } from '@ionic/angular';
import { AuthInterceptor } from '../../config/AuthInterceptor';
import { environment } from '../../../environments/environment';
import { KakaoService } from './kakao.service';
import { Location } from '@angular/common';
declare const Kakao: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('id') id?: IonInput;
  @ViewChild('password') password?: IonInput;

  constructor(private router: Router,
              private httpClient: HttpClient,
              private kakao: KakaoService,
              private location: Location,
              private authIntercept: AuthInterceptor) { }

  ngOnInit() {
  }

  async enterSignUp () {
    await this.router.navigateByUrl('/signup')
  }

  async onLogin () {
    if(this.id?.value === '') {
      alert('아이디를 입력해주세요.')
      return;
    }
    if(this.password?.value === '') {
      alert('비밀번호를 입력해주세요.')
      return;
    }
    await this.httpClient.post(environment.apiServer+'/login', {
      loginId: this.id?.value,
      password: this.password?.value,
      accountType: 'EMAIL',
    }).subscribe(async (p: any) => {
      // this.authIntercept.setToken(p.data);
      window.localStorage.clear();
      window.localStorage.setItem('token', p.data);
      await this.router.navigate(['/']);
    });
  }

  onLoginByKakao () {
    this.kakao.login().then((access_token: any) => {
      console.log('access_token', access_token);
    });
  }

  moveLogin () {

  }

  loginEmail () {
  }

  back () {
    this.location.back();
  }
}
