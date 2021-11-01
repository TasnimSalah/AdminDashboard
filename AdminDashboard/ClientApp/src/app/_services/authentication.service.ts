import { HttpClient } from '@angular/common/http';
import { Injectable , Inject } from '@angular/core';
import { LogInResponse } from '../_models/log-in-response';
import { RegistrationResponseModel } from '../_models/registration-response-model';
import { UserLogIn } from '../_models/user-log-in';
import { UserRegisteration } from '../_models/user-registeration';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  _baseUrl : string ;
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this._baseUrl = baseUrl;
  }

  //send the register POST request to the Web API.
  public registerUser = (route: string, body: UserRegisteration) => {
    console.log("rote is :" , this._baseUrl , route);
    return this._http.post<RegistrationResponseModel> (this._baseUrl+route , body);
  }

  public logIn = (route:string , body:UserLogIn)=>{
    return this._http.post<LogInResponse>(this._baseUrl+route , body);
  }
}