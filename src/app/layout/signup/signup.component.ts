import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  mbtis: any;

  constructor(private router: Router) { }

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

  enterSignUp () {
    this.router.navigateByUrl('/');
  }

  onBack () {
    this.router.navigate(['/login']);
  }
}
