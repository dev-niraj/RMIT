import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { DatePipe } from '@angular/common';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

}
