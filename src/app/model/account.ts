import { ReView } from './re-view';
import { TasteRoomMember } from './taste-room-member';
import { User } from './user';

export class Account {
  id: string = '';
  loginId: string = '';
  password: string = '';
  type: string = '';
  user: User = new User();
  reViews: ReView[] = [];
  attendantTasteRooms: TasteRoomMember[] = [];
}
