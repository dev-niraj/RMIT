import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { NavComponent } from './nav/nav.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { TeamsComponent } from './teams/teams.component';
import { ShiftPreferenceComponent } from './shift-preference/shift-preference.component';
import { ScheduleCreateComponent } from './schedule-create/schedule-create.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
// tslint:disable-next-line:max-line-length
import { MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatDividerModule } from '@angular/material';
import { ColorPickerModule } from 'ngx-color-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBoxCalComponent } from './dialog-box-cal/dialog-box-cal.component';
import { SwapPopupCalComponent } from './swap-popup-cal/swap-popup-cal.component';
import { SchedulecalComponent } from './schedulecal/schedulecal.component';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ExcelService } from './_services/excel.service';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    NavComponent,
    SidebarNavComponent,
    TeamsComponent,
    ShiftPreferenceComponent,
    ScheduleCreateComponent,
    MyScheduleComponent,
    LoginComponent,
    BaseComponent,
    DialogBoxCalComponent,
    SwapPopupCalComponent,
    SchedulecalComponent
  ],
  exports: [
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,

  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ColorPickerModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    ExcelService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SchedulecalComponent, DialogBoxCalComponent, SwapPopupCalComponent]
})
export class AppModule { }
