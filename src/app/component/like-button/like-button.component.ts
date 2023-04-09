import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss'],
  animations: [
    trigger('heartAnimation', [
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
export class LikeButtonComponent implements OnInit {
 @Output()
  onClick = new EventEmitter<boolean>();
  constructor() { }

  @Input()
  isHeartRegular = false;
  ngOnInit() {}


  toggleHeart() {
    this.isHeartRegular = !this.isHeartRegular;
    this.onClick.emit(this.isHeartRegular);
  }
}
