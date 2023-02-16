import { TasteRoom } from './taste-room';
import { User } from './user';

export class Chatting {
 id: string = '';
 content: string = '';
 createDate: Date = new Date();
 tasteRoom: TasteRoom = new TasteRoom();
 user: User = new User();
}
