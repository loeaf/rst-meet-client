import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
import { RstInfoService } from './rst-info.service';
import { lastValueFrom, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../../model/restaurant';
import { UtilesService } from '../../../utiles/utiles.service';
import { Menu } from '../../../model/menu';
import { ReView } from '../../../model/re-view';
import { environment } from '../../../../environments/environment';
import { Location } from '@angular/common';
import { ActionSheetController} from '@ionic/angular';
import { RstService } from '../../../service/rst.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-rst-info',
  templateUrl: './rst-info.component.html',
  styleUrls: ['./rst-info.component.scss'],
})
export class RstInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  rstInfo: Restaurant = new Restaurant();
  images: any;
  nearRst: Restaurant[] = [];
  @ViewChild('rstInfoEle') rstInfoEle?: ElementRef;
  @ViewChild('hotPlaceEle') hotPlaceEle?: CdkVirtualScrollViewport;

  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              public actionSheet: ActionSheetController,
              public rstSvc: RstService,
              private router: Router) { }

  ngOnInit() {
  }

  initSwiper() {
    const swiper = new Swiper('.mySwiper', {
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
    const id = location.search.replace('?rstInfo=', '');
    this.initSwiper();
    await this.initRstInfo(id);
  }

  async initRstInfo(id: string) {
    try {
      const rstObj = await this.getRstInfo(id);
      this.rstInfo = rstObj.data[0];
      const rstList = await this.rstSvc.getNearRstList();
      this.nearRst = rstList.filter(p => p.id !== this.rstInfo.id);
      if (!this.rstInfoEle || !this.hotPlaceEle)
        return;
      this.rstInfoEle.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
      this.hotPlaceEle.scrollToIndex(0, 'smooth');
    } catch (error) {
      console.log(error);
      UtilesService.tokenCheck(error);
    }
  }

  async getRstInfo (id: string) {
    const p: any = await UtilesService.getGeolocation();
    const params = {
      longitude: p.coords.longitude,
      latitude: p.coords.latitude
    }
    const rstObj: any = await lastValueFrom(this.httpClient.post(environment.apiServer + '/Restaurant',
        {
          id: id,
          longitude: params.longitude,
          latitude: params.latitude
        }
      )
    );
    return rstObj;
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
  renderMenu (menus: Menu[]) {
    if(!menus) {
      return [];
    }
    return menus.filter(p => p.isMain === 'Y');
  }

  ngOnDestroy (): void {
  }

  back () {
    // this.ionNav.pop();
    this.location.back();
  }

  async enterTasteRoom (id: string) {
    const queryParams = {
      rstInfoId: 1
      // add more parameters as needed
    };
    // router
    await this.router.navigate(['/create-chat-taste-room'], {queryParams});
    // await this.rstInfoDataSub();
  }

  initImage (filename: string) {
    return environment.objectServer + '/image/' + filename;
  }

  async moveLink () {
    const action = await this.actionSheet.create({
      buttons: [{
        text: 'Open link',
        icon: 'link-outline',
        handler: () => {
          window.open('https://map.naver.com/v5/smart-around/place/1567503530?c=15,0,0,0,dh');
        }
      }]
    });
    await action.present();
  }

  async moveMap () {
    const queryParams = {
      rstInfoId: 1
      // add more parameters as needed
    };
    await this.router.navigate(['/tabs/tab2'], {queryParams});
  }

  async onClick ($event: boolean) {
    // 세션체크
    if (!UtilesService.isLogin()) {
      alert('로그인 페이지로 이동합니다');
      UtilesService.moveLogin();
    }
    await this.rstSvc.likeToogleRst(this.rstInfo.id);
  }
}
