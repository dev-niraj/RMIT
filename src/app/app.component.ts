import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { DatePipe } from '@angular/common';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BsDatepickerConfig } from 'ngx-bootstrap';

export interface DialogData {
  name: string;
  curshift: string;
  curShift: string;
  curEvnt: any;
  eventCol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe, MatDialogModule]
})
export class AppComponent implements OnInit {

  title = 'RosterManagement';
  jwtHelper = new JwtHelperService();

  colorTheme = 'theme-red';

  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

}
