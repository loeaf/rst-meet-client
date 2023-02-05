import { AfterViewInit, Component, OnInit } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
import { CreateChatContentComponent } from '../../layout/tabs/tab1/create-chat-content/create-chat-content.component';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-rst-info',
  templateUrl: './rst-info.component.html',
  styleUrls: ['./rst-info.component.scss'],
})
export class RstInfoComponent implements OnInit, AfterViewInit {
  component: any;

  constructor() { }

  ngOnInit() {
    this.component = CreateChatContentComponent;
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

}
