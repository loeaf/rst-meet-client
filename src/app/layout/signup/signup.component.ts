import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonInput } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { AuthInterceptor } from '../../config/AuthInterceptor';
import { lastValueFrom } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  mbtis: any;
  @ViewChild('email') email?: IonInput;
  @ViewChild('password1') password1?: IonInput;
  @ViewChild('password2') password2?: IonInput;

  constructor(private router: Router,
              private httpClient: HttpClient,
              private authIntercept: AuthInterceptor,
              private location: Location) { }

  ngOnInit() {
  }

  async enterSignUp () {
    if(this.checkCondition()) {
      return;
    }
    await this.postSignUp();
  }
  async postSignUp () {
    try {
      const res: any = await lastValueFrom(await this.httpClient.post(environment.apiServer + ''+'/users/signUp', {
        loginId: this.email?.value,
        password: this.password1?.value,
        accountType: "EMAIL",
      }));
      // await this.authIntercept.setToken(p.data);
      window.localStorage.clear();
      window.localStorage.setItem('token', res.data);
      await this.router.navigateByUrl('/');
    } catch (e) {
      console.error(e);
    };
  }

  checkCondition() {
    if(this.email?.value === '') {
      alert('이메일을 입력해주세요.');
      return true;
    }
    if(this.password1?.value === '' || this.password2?.value === '') {
      alert('비밀번호를 입력해주세요.');
      return true;
    }
    if(this.password1?.value !== this.password2?.value) {
      alert('비밀번호가 일치하지 않습니다.');
      return true;
    }
    return false;
  }

  onBack () {
    this.router.navigate(['..']);
  }

  back () {
    this.location.back();
  }
}
