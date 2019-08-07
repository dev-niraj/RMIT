import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventInput } from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CalendarComponent from '@fullcalendar/core/CalendarComponent';


@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css']
})
export class MyScheduleComponent implements OnInit {

  @ViewChild('calendar', {static: false}) CalendarComponent: FullCalendarComponent;


  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;

  calendarEvents: EventInput[] = [
    {title: 'Event now', start: new Date() }
  ];

  constructor() { }

  ngOnInit() {
  }

}
