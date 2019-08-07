import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-swap-popup-cal',
  templateUrl: './swap-popup-cal.component.html',
  styleUrls: ['./swap-popup-cal.component.css'],
  providers: [MatDialogModule]
})
export class SwapPopupCalComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<SwapPopupCalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  openDialog() {
    const dialogRef = this.dialog.open(SwapPopupCalComponent, {
      id: 'dialog2'
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
