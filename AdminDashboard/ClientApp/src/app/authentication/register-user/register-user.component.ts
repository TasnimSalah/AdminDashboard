import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisteration } from 'src/app/_models/user-registeration';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  newUser: UserRegisteration = new UserRegisteration("" , "" , "" , "" , "" , "");

  constructor(private auth: AuthenticationService , private router:Router) { }

  ngOnInit() {
   
  }

  registerUser() {
    console.log(this.newUser);
    this.auth.registerUser('api/Account/Registration', this.newUser).subscribe(
      data => {
        console.log("Successful registration" , data);
        this.router.navigate(["/authentication/login"]);
      },
      error => {
        console.log(error.error.errors);
      })
  }
}


