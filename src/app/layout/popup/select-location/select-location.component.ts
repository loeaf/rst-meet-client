import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Code } from '../../../model/get-nation';
import { HttpClient } from '@angular/common/http';
import { UtilesService } from '../../../utiles/utiles.service';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss'],
})
export class SelectLocationComponent implements OnInit {
  selectedTab: any = 'tab1';
  nations: Code[] = [];
  cites: Code[] = [];
  selectedValue: string = '';

  constructor(private router: Router, private httpClient: HttpClient, private r: ActivatedRoute) { }

  ngOnInit() {
    this.getNation();
  }

  onClick () {
    alert(this.selectedValue);
    const queryParams = {
      nation: this.selectedValue
      // add more parameters as needed
    };
    this.router.navigate(['../tabs/tab1'], { queryParams });
  }

  getNation () {
    this.httpClient.get(environment.apiServer + ''+`/CmmnCode/getNation`).subscribe((p: any) => {
      this.nations = p.result;
    }, error => {
      console.log(error);
      UtilesService.tokenCheck(error);
    });
  }

  selectNation (nation: Code) {
    this.cites = nation.cmmnCodeList;
  }
}
