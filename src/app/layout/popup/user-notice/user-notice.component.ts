import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-notice',
  templateUrl: './user-notice.component.html',
  styleUrls: ['./user-notice.component.scss'],
})
export class UserNoticeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onClick () {
    this.router.navigate(['..']);
  }
}
