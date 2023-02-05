import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit, AfterViewInit {
  items: Array<string> = [];
  component: any;
  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  ngOnInit() {
    this.generateItems();
  }
  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 5; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }
  onIonInfinite(ev: Event) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
