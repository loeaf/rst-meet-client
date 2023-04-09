import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { UtilesService } from './utiles/utiles.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor() {}

  ngAfterViewInit (): void {
  }

  ngOnDestroy (): void {
  }

  ngOnInit (): void {
  }
}
