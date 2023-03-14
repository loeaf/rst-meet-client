import { Component, OnInit } from '@angular/core';
import { LocationInfoComponent } from '../../location-info/location-info.component';
import { Clipboard } from '@capacitor/clipboard';
import { IonToastService } from '../../../utiles/ion-toast.service';
import { IonButton } from '@ionic/angular';
import { TasteRoomListComponent } from '../../taste-room-list/taste-room-list.component';
import { TasteRoomContentComponent } from '../../../layout/tabs/tab1/taste-room-content/taste-room-content.component';
import { HttpClient } from '@angular/common/http';
import { RstListItemService } from './rst-list-item.service';
import { environment } from '../../../../environments/environment';
import { Restaurant } from '../../../model/restaurant';
import { Router } from '@angular/router';
import { RstInfoService } from '../../../layout/popup/rst-info/rst-info.service';
@Component({
  selector: 'app-rst-list-item',
  templateUrl: './rst-list-item.component.html',
  styleUrls: ['./rst-list-item.component.scss'],
})
export class RstListItemComponent implements OnInit {
  rstInfoComponent: any;
  locationInfoComponent: any;
  tasteRoomListComponent: any;
  rstList: Restaurant[] = [];
  rstInfo: Restaurant | undefined;

  constructor(private ionToastService: IonToastService,
              private httpClient: HttpClient,
              private rstListItemSvc: RstListItemService,
              private rstInfoSvc: RstInfoService,
              private router: Router) { }

  ngOnInit() {
    this.locationInfoComponent = LocationInfoComponent;
    this.tasteRoomListComponent = TasteRoomContentComponent;
    this.subScribeInit();
    this.rstListItemSvc.renderRstListItem.emit();
  }
  async onCopy (text: string) {
    await Clipboard.write({
      string: text
    });
    this.ionToastService.presentToast('Copied to clipboard');
  }

  onToggle (favEle: IonButton) {
    favEle.color = favEle.color === 'primary' ? 'medium' : 'primary';
    if(favEle.color === 'primary') {
      this.ionToastService.presentToast('북마크에 추가됬습니다');
    } else {
      this.ionToastService.presentToast('북마크에서 제거됬습니다');
    }
  }

  subScribeInit() {
    this.rstListItemSvc.renderRstListItem.subscribe(p => {
      this.httpClient.get(environment.apiServer + ''+'/Restaurant').subscribe((result: any) => {
        const data: Restaurant[] = result.data;
        this.rstList = data;
      });
    });
  }

  moveRastaurantInfo (obj: Restaurant) {
    const queryParams = {
      rstInfo: obj
      // add more parameters as needed
    };
    this.router.navigate(['/rst-info'], { queryParams });
  }
}
