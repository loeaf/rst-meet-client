import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatContentService } from './chat-content.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
const $ = require( "jquery" );

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit {
  @ViewChild('chatContent') chatContent?: ElementRef;

  constructor(private chatContentSvc: ChatContentService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
  }

  onBack () {
    this.location.back();
  }
}
