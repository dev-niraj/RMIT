import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  isOpen = false;
  values: any;

  myForm: FormGroup;

  featureSelected = new EventEmitter<string>();

  colorTheme = 'theme-red';

  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getReport();
    this.myForm = this.formBuilder.group({
      date: null,
      dateRange: null
    });
  }

  onSelect(feature: string) {
    this.featureSelected.emit();
  }

  getReport() {
    this.http.get('http://localhost:5000/api/report/getreport').subscribe(response => {
      this.values = response;
    }, error => {
      console.log('error');
    });
  }

}
