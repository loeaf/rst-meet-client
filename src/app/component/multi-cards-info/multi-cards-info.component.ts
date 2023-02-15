import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-multi-cards-info',
  templateUrl: './multi-cards-info.component.html',
  styleUrls: ['./multi-cards-info.component.scss'],
})
export class MultiCardsInfoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit (): void {
    var cardSwiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true
    })
  }

}
