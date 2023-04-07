import { Menu } from './menu';
import { ReView } from './re-view';
import { TasteRoom } from './taste-room';

export class Restaurant {
  id: string = '';
  // 맛집번호
  restaurantNumber: number = 0;
  // 맛집명
  name: string = '';
  // 한글도로명주소
  roadAddress: string = '';
  // 한글지번주소
  jibunAddress: string = '';
  // 영어주소
  englishAddress: string = '';
  // 요약주소
  miniAddress: string = '';
  // 위도
  latitude: number = 0;
  // 경도
  longitude: number = 0;
  // 지리정보
  geoInfo: any = {};
  // 등록일
  regDate: string = '';
  // 전화번호
  phoneNumber: string = '';
  // 휴무일
  holiday: string = '';
  // 대표메뉴
  representativeMenu: string = '';
  // 이미지정보
  medias: string[] = [];
  // 메뉴정보
  menus: Menu[] = [];
  // 리뷰정보
  reViews: ReView[] = [];
  // 챗방
  tasteRooms: TasteRoom[] = [];
  imagePath: string = '';
  imageName: string = '';
  distance: number = 0;
}
