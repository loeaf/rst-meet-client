import { Component, Input, OnInit } from '@angular/core';
import { TasteRoom } from '../../../model/taste-room';

@Component({
  selector: 'app-taste-list-item',
  templateUrl: './taste-list-item.component.html',
  styleUrls: ['./taste-list-item.component.scss'],
})
export class TasteListItemComponent implements OnInit {
  @Input()
  tasteRoom: TasteRoom = new TasteRoom();

  constructor() { }

  ngOnInit() {}

  onClickItem () {
    console.log('clicked');
  }
}
