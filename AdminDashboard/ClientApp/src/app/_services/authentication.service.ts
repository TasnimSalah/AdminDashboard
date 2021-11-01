import { HttpClient } from '@angular/common/http';
import { Injectable , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LogInResponse } from '../_models/log-in-response';
import { RegistrationResponseModel } from '../_models/registration-response-model';
import { UserLogIn } from '../_models/user-log-in';
import { UserRegisteration } from '../_models/user-registeration';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  _authChanged = new Subject<boolean>();
  public authChanged = this._authChanged.asObservable();
  _baseUrl : string ;
  
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string , private route:Router) { 
    this._baseUrl = baseUrl;
  }

  //notify all the subscribed components about the Angular authentication state change
  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChanged.next(isAuthenticated);
  }

  //send the register POST request to the Web API.
  public registerUser = (route: string, body: UserRegisteration) => {
    console.log("rote is :" , this._baseUrl , route);
    return this._http.post<RegistrationResponseModel> (this._baseUrl+route , body);
  }

  public logIn = (route:string , body:UserLogIn)=>{
    return this._http.post<LogInResponse>(this._baseUrl+route , body);
  }

  public logOut = ()=>{
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
    this.route.navigate(['']);
  }
}
