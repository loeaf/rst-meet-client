import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../../model/restaurant';
import { RstService } from '../../../../service/rst.service';
import { ListContentService } from './list-content.service';
import { UtilesService } from '../../../../utiles/utiles.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss'],
})
export class ListContentComponent implements OnInit, AfterViewInit {
  nearRst: Restaurant[] = [];
  objectServer: string = '';

  constructor(private rstService: RstService,
              private router: Router,
              private listContentService: ListContentService) {
    this.objectServer = environment.objectServer;
  }

  ngOnInit() {
    this.initList();
    this.listContentService.listRender.subscribe(p => {
      this.initList();
    });
  }

  async ngAfterViewInit() {
  }

  async initList() {
    const data = await this.rstService.getNearRstList();
    debugger;
    this.nearRst = data;
  }

  async clickItem (id: string) {
    const queryParams = {
      rstInfo: id
      // add more parameters as needed
    };
    // sleep 2
    await UtilesService.sleep(100);
    await this.router.navigate(['/rst-info'], { queryParams });
  }
}
