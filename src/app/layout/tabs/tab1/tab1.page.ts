import { Component } from '@angular/core';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { IonNavLink } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  component: any = MainPageContentComponent;


  constructor() {}

}
