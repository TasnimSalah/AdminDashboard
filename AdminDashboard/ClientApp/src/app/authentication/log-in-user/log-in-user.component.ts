import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogIn } from 'src/app/_models/user-log-in';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-log-in-user',
  templateUrl: './log-in-user.component.html',
  styleUrls: ['./log-in-user.component.css']
})
export class LogInUserComponent implements OnInit {
  public userLogIn: UserLogIn = new UserLogIn("" , "");

  constructor(private auth:AuthenticationService , private router:Router) { }

  ngOnInit() {
  }

  logInUser(){
    this.auth.logIn("api/Account/LogIn" , this.userLogIn).subscribe(
      data => {
        console.log("Success Login" , data);
        localStorage.setItem("token", data.token);
        this.auth.sendAuthStateChangeNotification(data.isAuthSuccessful);
        this.router.navigate(['']);

      },
      error =>{
        console.log("Error" + error);
      }
    )
  }

}
