import { TasteRoom } from './taste-room';
import { Chatting } from './chatting';

export class User {
  id: string = '';
  nickName: string = '';
  userId: TasteRoom[] = [];
  joinId: TasteRoom[] = [];
  chattings: Chatting[] = [];
}
