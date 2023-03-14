import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
import { RstInfoService } from './rst-info.service';
import { Subscription } from 'rxjs';
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
  component: any;
  rstInfo: Restaurant = new Restaurant();

  constructor(private rstInfoSvc: RstInfoService,
              private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.component = CreateTasteRoomContentComponent;
    this.rstInfoDataSub();
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

  ngAfterViewInit (): void {
    this.initSwiper();
  }

  rstInfoDataSub(): void {
    this.activatedRoute.queryParams.subscribe((p: any) => {
      debugger;
      const obj = JSON.parse(p.rstInfo);
      this.httpClient.get(environment.apiServer+`/Restaurant?id=${obj.id}`).subscribe((p: any) => {
        this.rstInfo = p.data;
      }, error => {
        console.log(error);
        UtilesService.tokenCheck(error);
      });
    });
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
}
