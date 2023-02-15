import { Chat } from './chat';

export class TasteRoom {
  id: string = '';
  restaurantId: string = '';
  content: string = '';
  createDate: Date = new Date();
  chattings: Chat[] = [];
}
