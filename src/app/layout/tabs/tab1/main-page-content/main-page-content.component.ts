import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { KR } from 'country-flag-icons/string/3x2'
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../../../model/restaurant';
import { UtilesService } from '../../../../utiles/utiles.service';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageContentComponent implements OnInit, AfterViewInit {
  @ViewChild('emojiEle') emojiEle?: ElementRef;
  items: Array<string> = [];
  rstList: Restaurant[] = [];
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) { }

  ngAfterViewInit(): void {
    function htmlToElement(html: any) {
      var template = document.createElement('template');
      html = html.trim(); // Never return a text node of whitespace as the result
      template.innerHTML = html;
      return template.content.firstChild;
    }
    this.emojiEle?.nativeElement.append(htmlToElement(KR));
  }

  async ngOnInit() {
    // this.activatedRoute.queryParams.subscribe((params: any) => {
    //   if (Object.keys(params).length === 0) {
    //     console.log('The object is empty');
    //   } else {
    //     alert(params.get('nation'));
    //   }
    // });
    await this.initRestaurants();
  }

  async initRestaurants() {
    const p: any = await UtilesService.getGeolocation();
    const params = {
      longitude: p.coords.longitude,
      latitude: p.coords.latitude
    }
    const result: any = await lastValueFrom(this.httpClient.post(environment.apiServer + '/Restaurant',params));
    console.log(result);
    const data: Restaurant[] = result.data;
    this.rstList = data;
  }

  onIonInfinite(ev: Event) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  createChat () {

  }

  selectLocation () {
    this.router.navigate(['select-location']);
  }

  viewNotice () {
    this.router.navigate(['user-notice']);
  }
  async refresh(event: number) {
    if(event === 1) {
      await this.initRestaurants();
    }
  }
}
