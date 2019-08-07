import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  loadedSideNav = 'landing';

  constructor() { }

  ngOnInit() {
  }

  onNavigate(sideNav: string) {
    this.loadedSideNav = sideNav;
  }

}
