import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-info',
  templateUrl: './multi-info.component.html',
  styleUrls: ['./multi-info.component.scss'],
})
export class MultiInfoComponent implements OnInit, AfterViewInit {
  loaded: any = true;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit (): void {
  }

  moveMeetingRoom () {

  }
}
