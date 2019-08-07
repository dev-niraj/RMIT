import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialog,MatDatepickerModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';
import { FormGroup } from '@angular/forms';
import { DialogData } from '../app.component';
import { SwapPopupCalComponent } from '../swap-popup-cal/swap-popup-cal.component';


@Component({
  selector: 'app-dialog-box-cal',
  templateUrl: './dialog-box-cal.component.html',
  styleUrls: ['./dialog-box-cal.component.css'],
  providers: [MatDialogModule,{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'warn' },
}]
})
export class DialogBoxCalComponent implements OnInit {
  
  options: FormGroup;
  name: string;
  curshift: string;
  curShift: string;
  curEvnt: any;
  eventCol: string;
  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DialogBoxCalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      console.log(this.data);
    }

  openDialog() {
    const dialogRef = this.dialog.open(SwapPopupCalComponent, {
      width: '500px',
      data: { name: this.data.name,eventCol:this.eventCol,curshift:this.curshift }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();

  }

  ngOnInit() {
  }

}
