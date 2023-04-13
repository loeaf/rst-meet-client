import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilesService } from '../../utiles/utiles.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
  animations: [
    trigger('refreshAnimation', [
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
export class HeaderInfoComponent implements OnInit, AfterViewInit {
  myLocation: string = '';
  @Output()
  refechClick = new EventEmitter<number>();
  @Input()
  headerInfoType: HeaderInfoType = HeaderInfoType.Tab1;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {}

  async refresh () {
    this.initText();
    this.refechClick.emit(1);
  }
  async initText() {
    const p: any = await UtilesService.getGeolocation();
    const params = {
      longitude: p.coords.longitude,
      latitude: p.coords.latitude
    }
    try {
      const result: any = await lastValueFrom(this.httpClient.post(environment.apiServer + '/geo/location',params));
      this.myLocation = result.data.text;
    } catch (e) {
      this.myLocation = '';
    }
  }

  async ngAfterViewInit () {
    await this.refresh();
  }

  getLocationText () {
    return this.myLocation;
    if(this.myLocation.length > 0) {
      return this.myLocation + ' 근처 기준';
    } else {
      return '현재 위치 정보가 없습니다. 새로고침 해주세요.';
    }
  }
}

export enum HeaderInfoType {
  Tab1 = 1,
  Tab2 = 2,
  Tab3 = 3,
  Tab4 = 4,

}
