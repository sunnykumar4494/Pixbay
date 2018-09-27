import { Injectable } from '@angular/core';
import{ Response} from '@angular/http';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Headers,Http,HttpModule } from '@angular/http';

 

import 'rxjs/add/operator/map';


@Injectable()
export class PixbayservicesService {

  constructor(private _http:HttpClient) { }
private _pixurl="https://pixabay.com/api/?key=9497996-ac02b760594675d7ac8cf328f&q=";
private _reqresurl="https://reqres.in/api/login";

public data:any=[];
   getimages(query){
    var query1=query;
    
    console.log(this._http.get(this._pixurl+query1));
    return this._http.get(this._pixurl+query1)
    
  }
  AuthenticateUser(){
    debugger;
    var query1="";
    var header123=new HttpHeaders({
      'Content-Type': 'application/json',
      'grant_type': 'password'
    });
    var data={
      "email": "peter@klaven",
      "password": "cityslicka"
  };
    //console.log(this._http.post(this._reqresurl,data,{headers:header123}));
    return this._http.post(this._reqresurl,data,{ headers:header123})
    //return this._http.post(this._reqresurl + '/token', data, { headers: header123 })
             
            
    
    
  }
}
