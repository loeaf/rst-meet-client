import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taste-list-item',
  templateUrl: './taste-list-item.component.html',
  styleUrls: ['./taste-list-item.component.scss'],
})
export class TasteListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onClickItem () {
    console.log('clicked');
  }
}
