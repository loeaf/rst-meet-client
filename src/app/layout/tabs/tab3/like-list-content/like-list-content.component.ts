import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../../model/restaurant';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { UtilesService } from '../../../../utiles/utiles.service';
import { RstService } from '../../../../service/rst.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-like-list-content',
  templateUrl: './like-list-content.component.html',
  styleUrls: ['./like-list-content.component.scss'],
})
export class LikeListContentComponent implements OnInit {
  items: Restaurant[] = [];

  constructor(private httpClient: HttpClient,
              private rstSvc: RstService,
              private router: Router) {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        await this.getItems();
      }
    })
  }

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    // http get
    // 세션체크
    if (!UtilesService.isLogin()) {
      return;
    }
    const p: any = await lastValueFrom(this.httpClient.get(environment.apiServer+'/likeList'));
    this.items = p.data;

  }

  async clickLike (id: string) {
    // 세션체크
    if (!UtilesService.isLogin()) {
      alert('로그인 페이지로 이동합니다');
      UtilesService.moveLogin();
    }
    await this.rstSvc.likeToogleRst(id);
    await this.getItems();
  }

  async clickItem (id: string) {
    const queryParams = {
      rstInfo: id
      // add more parameters as needed
    };
    // sleep 2
    await UtilesService.sleep(100);
    await this.router.navigate(['/rst-info'], { queryParams });
  }

  async moveMap () {
    await this.router.navigate(['/tabs/tab2']);
  }
}
