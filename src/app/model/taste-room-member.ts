import { TasteRoom } from './taste-room';
import { Account } from './account';

export class TasteRoomMember {
  id: string = '';
  tasteRoom: TasteRoom = new TasteRoom();
  account: Account = new Account();
  createDate: Date = new Date();
}
