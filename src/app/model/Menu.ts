export interface Menu {
  // 아이디
  id: string;
  // 메뉴이름
  name: string;
  // 메뉴량 [소, 중, 기본]
  menuAmount: string;
  // 메뉴사진
  photoUrl: string;
  // 메뉴설명
  description: string;
  // 메뉴종류
  menuType: string;
  // 등록일
  regDate: string;
  // 대표메뉴여부
  isMain: string;
}
