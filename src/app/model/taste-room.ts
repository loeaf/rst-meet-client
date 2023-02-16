import { Chat } from './chat';

export class TasteRoom {
  id: string = '';
  restaurantId: string = '';
  content: string = '';
  peopleNum: number = 0;
  meetPaymentType: string = '';
  createDate: Date = new Date();
  chattings: Chat[] = [];
}
