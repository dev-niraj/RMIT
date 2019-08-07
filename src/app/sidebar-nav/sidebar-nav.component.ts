import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {

  @Output() sideNavSelected = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onSelect(navmenu: string) {
    this.sideNavSelected.emit(navmenu);
  }

}
