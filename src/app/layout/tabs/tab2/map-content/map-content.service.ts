import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapContentService {
  @Output()
  mapRender = new EventEmitter<any>();

  constructor() { }
}
