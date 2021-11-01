import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isUserAuthenticated:boolean;

  constructor(private auth:AuthenticationService , private router:Router){}

  ngOnInit(): void {
    this.auth.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logOut(){
    this.auth.logOut();
  }
}
