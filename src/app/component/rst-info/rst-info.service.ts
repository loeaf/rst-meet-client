import { EventEmitter, Injectable, Output } from '@angular/core';
import { Restaurant } from '../../model/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RstInfoService {
  @Output()
  public rstInfoDataEmt = new EventEmitter<Restaurant>();
  constructor() { }
}
