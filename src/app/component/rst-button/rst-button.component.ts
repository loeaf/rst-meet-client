import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rst-button',
  templateUrl: './rst-button.component.html',
  styleUrls: ['./rst-button.component.scss'],
})
export class RstButtonComponent implements OnInit {
  @Input()
  text: any;

  constructor() { }

  ngOnInit() {}

}
