import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
import { CreateTasteRoomContentComponent } from '../../layout/tabs/tab1/create-taste-room-content/create-taste-room-content.component';
import { RstInfoService } from './rst-info.service';
import { Restaurant } from '../../model/restaurant';
import { Menu } from '../../model/menu';
import { ReView } from '../../model/re-view';
import { Subscription } from 'rxjs';
import { NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UtilesService } from '../../utiles/utiles.service';

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
              public navParams : NavParams,
              private httpClient: HttpClient) { }

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
    const id = this.navParams.get("tasteRoomInfo").id;
    this.httpClient.get(`http://localhost:8080/Restaurant?id=${id}`).subscribe((p: any) => {
      this.rstInfo = p.data;
    }, error => {
      console.log(error);
      UtilesService.tokenCheck(error);
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
}
