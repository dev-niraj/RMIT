import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Reports } from '../Model/report.model';
import { DatePipe } from '@angular/common';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ExcelService } from '../_services/excel.service';
import { ExportToCsv } from 'export-to-csv';

const options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Reports',
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  isOpen = false;
  values: any;
  // reports: Reports[] = [];
  name: any;
  imgWidth: any;
  pageHeight: any;
  imgHeight: any;
  heightleft: any;
  pdf: any;
  position: any;
  data: any;
  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:object-literal-key-quotes
  // tslint:disable-next-line:max-line-length
  reports: any;

  // tslint:disable-next-line:variable-name
  start_date: string;
  // tslint:disable-next-line:variable-name
  end_date: string;

  myForm: FormGroup;

  featureSelected = new EventEmitter<string>();

  colorTheme = 'theme-red';

  bsConfig: Partial<BsDatepickerConfig>;

  columnDefs = [
    { headerName: 'name', field: 'name', sortable: true, filter: true, checkboxSelection: true},
    { headerName: 'sid', field: 'sid', sortable: true, filter: true },
    { headerName: 'start_date', field: 'start_date', sortable: true, filter: true },
    { headerName: 'end_date', field: 'end_date', sortable: true, filter: true }
  ];

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private datePipe: DatePipe, private excelService: ExcelService) { }

  ngOnInit() {
    this.getReport();
  }

  onSelect(feature: string) {
    this.featureSelected.emit();
  }

  onRnageSelect() {
    this.start_date = this.datePipe.transform(this.start_date, 'dd-MM-yyyy');
    // this.end_date = this.datePipe.transform(this.end_date, 'dd-MM-yyyy');
    console.log(this.start_date);

    if (this.start_date !== '') {
      this.values = this.values.filter(res => {
        console.log(res.start_date.match(this.start_date));
        return res.start_date.match(this.start_date);
      });
    }
  }

  RestReport() {
    this.ngOnInit();
  }

  search() {
    console.log(this.name);
  }

  convertToPdfWithData() {
    this.data = document.getElementById('datatable');

    html2canvas(this.data).then(canvas => {
      this.imgWidth = 208;
      this.pageHeight = 295;
      this.imgHeight = canvas.height * this.imgWidth / canvas.width;
      this.heightleft = this.imgHeight;

      const contentDataUrl = canvas.toDataURL('image/png');
      this.pdf = new jspdf('p', 'mm', 'a4');
      this.position = 0;
      this.pdf.addImage(contentDataUrl, 'PNG', 0, this.position, this.imgWidth, this.imgHeight);
      this.pdf.save('report.pdf');
    });

  }

  exportAsXLSX(): void {
    this.reports = JSON.parse(localStorage.getItem('reports'));
    // console.log(this.reports);
    this.excelService.exportAsExcelFile(this.reports, 'scheduleReport');
    // console.log(JSON.parse(localStorage.getItem('reports')));
  }


  exportAsCSV() {
    this.reports = JSON.parse(localStorage.getItem('reports'));
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.reports);
  }

  getReport() {
    this.values = this.http.get('http://localhost:5000/api/report');
  }
}
