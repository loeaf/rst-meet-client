import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import Swiper from 'swiper';
import { Restaurant } from '../../model/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit, AfterViewInit {
  items: Array<string> = [];
  component: any;
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: "auto",
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 10,
    });

    swiper.on('init', function() {
      var container: any = document.querySelector('.swiper-container');
      var slide: any = document.querySelector('.swiper-slide');
      container.style.height = slide.offsetHeight + 'px';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
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

  async clickItem (item: string) {
    const queryParams = {
      rstInfo: 1
      // add more parameters as needed
    };
    await this.router.navigate(['/rst-info'], { queryParams });
  }
}
