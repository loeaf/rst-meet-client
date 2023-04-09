import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss'],
})
export class MainPageContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  async moveLogin () {
    await this.router.navigate(['/login']);
  }
}
