import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UtilesService } from '../utiles/utiles.service';
import { environment } from '../../environments/environment';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RstService {

  constructor(private httpClient: HttpClient) { }

  async getNearRstList() {
    // const queryMap = new Map<string, string>();
    // queryMap.set('params.longitude', 127.28782174876+'');
    // queryMap.set('params.latitude', 36.477895749037+'');
    const p: any = await UtilesService.getGeolocation();
    const params = {
      longitude: p.coords.longitude,
      latitude: p.coords.latitude
    }
    const result: any = await lastValueFrom(this.httpClient.post(environment.apiServer + '/Restaurant',params));
    console.log(result);
    const data: Restaurant[] = result.data;
    return data;
  }

  /**
   * 좋아요에 성공하면 true, 해제하면 false 리턴
   * @param restaurantId
   */
  async likeToogleRst(restaurantId: string) {
    const result: any = await lastValueFrom(
      this.httpClient.post(environment.apiServer + '/likeList/toggle',{
        restaurantId: restaurantId
      })
    );
    return result;
  }
}
