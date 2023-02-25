import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonInput } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { AuthInterceptor } from '../../config/AuthInterceptor';

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

  constructor(private router: Router, private httpClient: HttpClient, private authIntercept: AuthInterceptor) { }

  ngOnInit() {
    this.mbtis = [
      'ISTJ',
      'ESTJ',
      'ISTP',
      'ISFJ',
      'ISFP',
      'ESTP',
      'ESFJ',
      'ESFP',
      'INTJ',
      'ENTP',
      'INFP',
      'INTP',
      'INFJ',
      'ENFJ',
      '모름',
    ]
  }

  async enterSignUp () {
    if(this.checkCondition()) {
      return;
    }
    await this.postSignUp();
  }
  async postSignUp () {
    debugger;
    await this.httpClient.post(environment.apiServer+'/users/signUp', {
      loginId: this.email?.value,
      password: this.password1?.value,
      accountType: "EMAIL",
    }).subscribe(async (p: any) => {
      // await this.authIntercept.setToken(p.data);
      debugger;
      window.localStorage.clear();
      window.localStorage.setItem('token', p.data);
      await this.router.navigateByUrl('/');
    })
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
}
