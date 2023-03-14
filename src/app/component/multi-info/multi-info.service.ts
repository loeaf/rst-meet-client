import { Injectable } from '@angular/core';
import { UtilesService } from '../../utiles/utiles.service';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class MultiInfoService {

  constructor(private httpClient: HttpClient) { }

  async getNearRstList() {
    // const queryMap = new Map<string, string>();
    // queryMap.set('params.longitude', 127.28782174876+'');
    // queryMap.set('params.latitude', 36.477895749037+'');
    const p = await UtilesService.getGeolocation();
    const params = {
      longitude: p.coords.longitude,
      latitude: p.coords.latitude
    }
    // const params = {
    //   longitude: 127.28782174876,
    //   latitude: 36.477895749037
    // }
    const result: any = await lastValueFrom(this.httpClient.post(environment.apiServer + '/Restaurant',params));
    console.log(result);
    const data: Restaurant[] = result.data;
    return data;
  }
}
