import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ItemInfoComponent } from '../../layout/tab1/item-info/item-info.component';

@Component({
  selector: 'app-multi-info',
  templateUrl: './multi-info.component.html',
  styleUrls: ['./multi-info.component.scss'],
})
export class MultiInfoComponent implements OnInit, AfterViewInit {
  loaded: any = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
  }

}
