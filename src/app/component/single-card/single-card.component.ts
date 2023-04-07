import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import Swiper from 'swiper';
import { Restaurant } from '../../model/restaurant';
import { Router } from '@angular/router';
import { RstListItemService } from '../multi-info/rst-list-item/rst-list-item.service';
import { UtilesService } from '../../utiles/utiles.service';
import { MultiInfoService } from '../multi-info/multi-info.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit, AfterViewInit, OnDestroy {
  rstList: Restaurant[] = [];
  component: any;
  swiper: any;
  constructor(private router: Router, private rstListItemSvc: RstListItemService,
              private multiInfoSvc: MultiInfoService,) { }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.subScribeInit();
    this.rstListItemSvc.renderRstListItem.emit(1);
    this.swiperInit();
  }
  swiperInit() {
    this.swiper = new Swiper('.mySwiper', {
      slidesPerView: "auto",
      loopedSlides: 3,
      // centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });

    this.swiper.on('init', function() {
      var container: any = document.querySelector('.swiper-container');
      var slide: any = document.querySelector('.swiper-slide');
      container.style.height = slide.offsetHeight + 'px';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
    });
  }
  subScribeInit() {
    this.rstListItemSvc.renderRstListItem.subscribe(async p => {
      debugger;
      try {
        // create get query map by map
        // console.log(location);
        const data = await this.multiInfoSvc.getNearRstList();
        this.rstList = data;
      } catch (e) {
        UtilesService.tokenCheck(e);
      }
    });
  }

  async clickItem (item: string) {
    const queryParams = {
      rstInfo: item
      // add more parameters as needed
    };
    await this.router.navigate(['/rst-info'], { queryParams });
  }

  ngOnDestroy (): void {
  }

}
