import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  featureSelected = new EventEmitter<string>();

  colorTheme = 'theme-red';

  bsConfig: Partial<BsDatepickerConfig>;

  constructor() { }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  onSelect(feature: string) {
    this.featureSelected.emit();
  }

}
