import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ClaimsService } from '../_services/claims.service';

@Component({
  selector: 'app-claims-component',
  templateUrl: './claims-component.component.html',
  styleUrls: ['./claims-component.component.css']
})
export class ClaimsComponentComponent implements OnInit {

  public claims: [] = [];

  constructor(private claim:ClaimsService) { }

  ngOnInit() {
  }

  getData(){
    this.claim.getClaims("api/Admin/Claims").subscribe(
      data=>{
        console.log("success get claims" , data);
        this.claims = data as [];
      },
      err=>{
        console.log("error in get claims",err);
      }
    )

  }



}
