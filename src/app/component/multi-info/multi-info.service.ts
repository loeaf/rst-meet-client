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
    const queryMap = new Map<string, string>();
    queryMap.set('lat', 127.28782174876+'');
    queryMap.set('lng', 36.477895749037+'');
    const query = UtilesService.createQueryString(queryMap);
    const result: any = await lastValueFrom(this.httpClient.get(environment.apiServer + '/Restaurant?'+query));
    console.log(result);
    const data: Restaurant[] = result.data;
    return data;
  }
}
