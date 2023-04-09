import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListContentService {
  @Output()
  listRender = new EventEmitter<any>();

  constructor() { }
}
