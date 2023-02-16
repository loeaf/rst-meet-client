import { Chatting } from './chatting';
import { TasteRoomMember } from './taste-room-member';

export class TasteRoom {
  id: string = '';
  restaurantId: string = '';
  content: string = '';
  peopleNum: number = 0;
  meetPaymentType: string = '';
  createDate: Date = new Date();
  chattings: Chatting[] = [];
  attendantMembers: TasteRoomMember[] = [];
}
