import { Component } from '@angular/core';
import { UtilesService } from '../../../utiles/utiles.service';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MapContentService } from './map-content/map-content.service';
import { ListContentService } from './list-content/list-content.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isMap = true;

  constructor(private httpClient: HttpClient,
              private mapContentService: MapContentService,
              private listContentService: ListContentService) {
  }

  async refresh ($event: number) {
    this.mapContentService.mapRender.emit();
    this.listContentService.listRender.emit();
  }

  toggle () {
    this.isMap = !this.isMap;
  }
}
