import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  _baseUrl:string ;
  constructor(private http:HttpClient , @Inject('BASE_URL') baseUrl: string , private router:Router) {
    this._baseUrl = baseUrl;
   }

   getClaims(route:string){
     return this.http.get(this._baseUrl+route);
   }


}
