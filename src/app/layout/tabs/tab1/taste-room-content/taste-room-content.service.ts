import { EventEmitter, Injectable, Output } from '@angular/core';
import { TasteRoom } from '../../../../model/taste-room';

@Injectable({
  providedIn: 'root'
})
export class TasteRoomContentService {
  @Output() private tasteRoomSelected = new EventEmitter<TasteRoom>();

  constructor() { }
  // eimt
  emitTasteRoomSelected(tasteRoom: TasteRoom) {
    this.tasteRoomSelected.emit(tasteRoom);
  }
  // subscribe
  subscribeTasteRoomSelected() {
    return this.tasteRoomSelected;
  }
  // unsubscribe
  unsubscribeTasteRoomSelected() {
    this.tasteRoomSelected.unsubscribe();
  }
}
