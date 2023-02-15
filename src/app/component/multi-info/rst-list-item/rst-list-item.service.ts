import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RstListItemService {
  @Output()
  public renderRstListItem = new EventEmitter<any>();
  constructor() { }
}
