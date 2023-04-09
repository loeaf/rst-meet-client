import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Restaurant } from '../../model/restaurant';
import { IonToastService } from '../../utiles/ion-toast.service';
import { HttpClient } from '@angular/common/http';
import { RstListItemService } from './rst-list-item/rst-list-item.service';
import { Router } from '@angular/router';
import { LocationInfoComponent } from '../location-info/location-info.component';
import { TasteRoomContentComponent } from '../../layout/tabs/tab1/taste-room-content/taste-room-content.component';
import { Clipboard } from '@capacitor/clipboard';
import { IonButton } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { UtilesService } from '../../utiles/utiles.service';
import { lastValueFrom } from 'rxjs';
import { RstInfoService } from '../../layout/popup/rst-info/rst-info.service';
import { RstService } from '../../service/rst.service';

@Component({
  selector: 'app-multi-info',
  templateUrl: './multi-info.component.html',
  styleUrls: ['./multi-info.component.scss'],
})
export class MultiInfoComponent  implements OnInit {
  locationInfoComponent: any;
  tasteRoomListComponent: any;
  rstList: Restaurant[] = [];
  rstInfo: Restaurant | undefined;

  constructor(private ionToastService: IonToastService,
              private httpClient: HttpClient,
              private rstListItemSvc: RstListItemService,
              private rstInfoSvc: RstInfoService,
              private multiInfoSvc: RstService,
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
    this.rstListItemSvc.renderRstListItem.subscribe(async p => {
      try {
        // create get query map by map
        // console.log(location);
        const data = await this.multiInfoSvc.getNearRstList();
        this.rstList = data;
      } catch (e) {
        UtilesService.tokenCheck(e);
      }
    });
  }

  moveRastaurantInfo (obj: Restaurant) {
  }

  async enterRstinfo (obj: Restaurant) {
    const queryParams = {
      rstInfo: obj.id
      // add more parameters as needed
    };
    await this.router.navigate(['/rst-info'], { queryParams });
  }
}
