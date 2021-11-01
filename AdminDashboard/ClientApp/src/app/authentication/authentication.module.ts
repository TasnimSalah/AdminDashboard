import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogInUserComponent } from './log-in-user/log-in-user.component';



@NgModule({
  declarations: [RegisterUserComponent, LogInUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'register' , component : RegisterUserComponent},
      {path: 'login' , component: LogInUserComponent},
    ])
  ]
})
export class AuthenticationModule { }
