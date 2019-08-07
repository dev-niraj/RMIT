import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-preference',
  templateUrl: './shift-preference.component.html',
  styleUrls: ['./shift-preference.component.css']
})
export class ShiftPreferenceComponent implements OnInit {
  masteredSelected: boolean;
  empDetailArray: any;

  constructor() {
    this.masteredSelected = false;
    this.empDetailArray = [
      {id: 1, name: 'Aditya Prasad', wwid: '20008609' , isSelected: false},
      {id: 2, name: 'Akshya Suvarna' , wwid: '20008604' , isSelected: false},
      {id: 3, name: 'Niraj' , wwid: '20008634' , isSelected: false},
      {id: 4, name: 'Jaydev' , wwid: '20008621' , isSelected: false},
      {id: 5, name: 'Harsha' , wwid: '20008622' , isSelected: false}
    ];
  }

  ngOnInit() {
  }
}
