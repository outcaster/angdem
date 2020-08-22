import { Component, OnInit } from '@angular/core';

import { Router } from  '@angular/router';
import { AuthService } from  '../business/service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    public authService: AuthService, 
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout()
    this.router.navigateByUrl('/');
  }
}
