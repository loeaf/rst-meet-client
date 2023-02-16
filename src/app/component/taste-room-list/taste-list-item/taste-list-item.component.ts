import { Component, Input, OnInit } from '@angular/core';
import { TasteRoom } from '../../../model/taste-room';
import { UtilesService } from '../../../utiles/utiles.service';

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

  getBeforeDate (createDate: Date) {
    return UtilesService.displayedAt(createDate);
  }

  setRecruit (length: number, peopleNum: number) {
    if(length === peopleNum) {
      return '마감';
    } else {
      return '모집중';
    }
  }
}
