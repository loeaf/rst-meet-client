import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypage-content',
  templateUrl: './mypage-content.component.html',
  styleUrls: ['./mypage-content.component.scss'],
})
export class MypageContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onSingup () {
    this.router.navigate(['/login']);
  }
}
