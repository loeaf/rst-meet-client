import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss'],
})
export class LikeButtonComponent implements OnInit {
 @Output()
 onClick = new EventEmitter<any>();
  constructor() { }

  @Input()
  isHeartRegular = false;
  ngOnInit() {}


  toggleHeart() {
    this.isHeartRegular = !this.isHeartRegular;
    this.onClick.emit(this.isHeartRegular);
  }
}
