import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import Swiper from 'swiper';
import { KR } from 'country-flag-icons/string/3x2'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageContentComponent implements OnInit, AfterViewInit {
  @ViewChild('emojiEle') emojiEle?: ElementRef;
  items: Array<string> = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

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
    function htmlToElement(html: any) {
      var template = document.createElement('template');
      html = html.trim(); // Never return a text node of whitespace as the result
      template.innerHTML = html;
      return template.content.firstChild;
    }
    this.emojiEle?.nativeElement.append(htmlToElement(KR));
    }

  ngOnInit() {
    this.generateItems();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (Object.keys(params).length === 0) {
        console.log('The object is empty');
      } else {
        alert(params.get('nation'));
      }
    });
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

  createChat () {

  }

  selectLocation () {
    this.router.navigate(['select-location']);
  }

  viewNotice () {
    this.router.navigate(['user-notice']);
  }
}
