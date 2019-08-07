import { Component, ViewChild, OnInit, Inject, Input } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';
import { OptionsInput } from '@fullcalendar/core/types/input-types';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { DialogBoxCalComponent } from '../dialog-box-cal/dialog-box-cal.component';


// import { DialogData } from '../app.component';

@Component({
  selector: 'app-schedulecal',
  templateUrl: './schedulecal.component.html',
  styleUrls: ['./schedulecal.component.css'],
  providers: [DatePipe, MatDialogModule]
})
export class SchedulecalComponent implements OnInit {

  options: OptionsInput;
  eventsModel: any;
  curshift: string;
  name: string;
  curShift: string;
  curEvnt: any;
  eventCol: string;
  curDate = new Date();


  @Input() eventData: any;
  // POPUP for swap start
  constructor(public dialog: MatDialog, private datePipe: DatePipe) {

    this.eventData = [
      {// events
        // tslint:disable-next-line:max-line-length
        title: 'S1', startRecur: new Date('2019-08-01'), allDay: false, startTime: '06:00:00', duration: '08:00', daysOfWeek: [1, 2, 3, 4, 5],
        constraint: 'businessHours', endRecur: new Date('2019-08-07'),
        overlap: true

      },
      {
        // tslint:disable-next-line:max-line-length
        title: 'S2', startRecur: new Date('2019-08-01'), allDay: false, startTime: '14:00:00', duration: '08:00', daysOfWeek: [1, 2, 3, 4, 5],
        constraint: 'businessHours', endRecur: new Date('2019-08-07'),
        overlap: true
      },
      {
        // tslint:disable-next-line:max-line-length
        title: 'S3', startRecur: new Date('2019-08-01'), allDay: false, startTime: '22:00:00', duration: '08:00', daysOfWeek: [1, 2, 3, 4, 5],
        constraint: 'businessHours', endRecur: new Date('2019-08-07'),
        overlap: true
      }
    ];
  }

  openDialog(test: any): void {

    const dialogRef = this.dialog.open(DialogBoxCalComponent, {
      width: '500px',
      data: { name: 'Arun', curshift: test.title, eventCol: this.eventCol }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log('The dialog was closed');
      this.eventCol = result;
      test.setProp('color', this.eventCol); // Dynamic update color

    });
  }

  // POPUP for swap end
  // tslint:disable-next-line:member-ordering
  @ViewChild('calendar', { static: true }) calendarComponent: Calendar; // the #calendar in the template
  ngOnInit() {
    // OPTIONS IN CALENDAR
    this.options = {
      businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: '00:00',
        endTime: '24:00',
      },
      editable: true,
      customButtons: {
      },
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,listView,timeGridWeek,timeGridDay'
      },
      plugins: [dayGridPlugin, interactionPlugin, listPlugin, bootstrapPlugin, timeGrigPlugin],
      events: this.eventData
    };
  }
  // EVENT CLICK FUNCTION
  eventClick(info) {
    this.curEvnt = info;
    if (this.datePipe.transform(info.event.start, 'yyy-MM-dd') <= this.datePipe.transform(this.curDate, 'yyyy-MM-dd')) {
      return null;
    } else {
      this.openDialog(info.event);
    }

  }
  eventMouseEnter(mouseEnterInfo) {

  }

}
