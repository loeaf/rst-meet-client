import { AfterViewInit, Component, OnInit } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-rst-info',
  templateUrl: './rst-info.component.html',
  styleUrls: ['./rst-info.component.scss'],
})
export class RstInfoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

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

}
