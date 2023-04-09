import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import Swiper from 'swiper';
import { Restaurant } from '../../model/restaurant';
import { NavigationEnd, Router } from '@angular/router';
import { RstListItemService } from '../multi-info/rst-list-item/rst-list-item.service';
import { UtilesService } from '../../utiles/utiles.service';
import { environment } from '../../../environments/environment';
import { RstService } from '../../service/rst.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('void => *', [
        style({
          transform: 'scale(0)',
        }),
        animate('0.2s ease-in-out', style({ transform: 'scale(1.2)' })),
        animate('0.2s ease-in-out', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class SingleCardComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  rstList: Restaurant[] = [];
  component: any;
  swiper: any;
  constructor(private router: Router,
              private rstListItemSvc: RstListItemService,
              private multiInfoSvc: RstService,) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
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

  async clickItem (item: string) {
    const queryParams = {
      rstInfo: item
      // add more parameters as needed
    };
    // sleep 2
    await UtilesService.sleep(100);
    await this.router.navigate(['/rst-info'], { queryParams });
  }

  ngOnDestroy (): void {
  }

}
