import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilesService } from '../../utiles/utiles.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss'],
})
export class MainLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  async moveLogin () {
    await UtilesService.sleep(1000);
    await this.router.navigateByUrl('/login');
  }

  async onSignUp () {
    await UtilesService.sleep(1000);
    await this.router.navigateByUrl('/signup');
  }
}
