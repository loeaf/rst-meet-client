import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
import { RstInfoService } from './rst-info.service';
import { lastValueFrom, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../../model/restaurant';
import {
  CreateTasteRoomContentComponent
} from '../../tabs/tab1/create-taste-room-content/create-taste-room-content.component';
import { UtilesService } from '../../../utiles/utiles.service';
import { Menu } from '../../../model/menu';
import { ReView } from '../../../model/re-view';
import { environment } from '../../../../environments/environment';
import { Location } from '@angular/common';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-rst-info',
  templateUrl: './rst-info.component.html',
  styleUrls: ['./rst-info.component.scss'],
})
export class RstInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  rstInfo: Restaurant = new Restaurant();

  constructor(private rstInfoSvc: RstInfoService,
              private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

  initSwiper() {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      grabCursor: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  async ngAfterViewInit () {
    this.initSwiper();
    await this.rstInfoDataSub();
  }


  async rstInfoDataSub() {
    const id = location.search.replace('?rstInfo=', '');
    console.log(id)
    try {
      const rstObj: any = await lastValueFrom(this.httpClient.post(environment.apiServer+'/Restaurant'
      , {id: id}));
      console.log(rstObj.data)
      this.rstInfo = rstObj.data;
    } catch (error) {
      console.log(error);
      UtilesService.tokenCheck(error);
    }
  }

  renderMainMenu (menus: Menu[]) {
    if(!menus) {
      return [];
    }
    return menus.filter(p => p.isMain === 'Y')
  }

  renderReView (reViews: ReView[]) {
    if(!reViews) {
      return [];
    }
    return reViews.filter(p => p.isMain === 'Y');
  }

  ngOnDestroy (): void {
  }

  back () {
    // this.ionNav.pop();
    this.location.back();
  }

  async enterTasteRoom () {
    await this.rstInfoDataSub();
  }
}
