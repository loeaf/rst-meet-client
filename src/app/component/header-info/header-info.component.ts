import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UtilesService } from '../../utiles/utiles.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit, AfterViewInit {
  myLocation: string = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {}

  async refresh () {
    const p: any = await UtilesService.getGeolocation();
    const params = {
      longitude: p.coords.longitude,
      latitude: p.coords.latitude
    }
    const result: any = await lastValueFrom(this.httpClient.post(environment.apiServer + '/geo/location',params));
    this.myLocation = result.data.text;

  }

  ngAfterViewInit (): void {
    this.refresh();
  }
}
