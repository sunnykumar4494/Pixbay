 
import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {PixbayservicesService} from '../../service/pixbayservices.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  LoginForm = new FormGroup({
    firstName: new FormControl('',),
    lastName: new FormControl(''),
  });

  @Output() IsAuthenticated = new EventEmitter<boolean>();
  @Output() voted = new EventEmitter<boolean>();

  IsAuthenticated1:boolean=false;
  datauser:any;
  public token:any = [];

  constructor(private _pixbayservice:PixbayservicesService,private Sessionst:SessionStorageService) { }

  ngOnInit() {
  }
  onSubmitLogin()
  {
    debugger;
    console.log(this.LoginForm.value);
  
    //this.IsAuthenticated.emit(true);
    this.voted.emit(true);
    this._pixbayservice.AuthenticateUser()
    .subscribe(res=>{
      console.log("Response is:");
      console.log(res);
      

      if(res!=null)
      {
     
        this.Sessionst.store("token",res);
        this.IsAuthenticated.emit(true);
        this.Sessionst.store("user",this.LoginForm.value.firstName);
       // localStorage.setItem("user",this.LoginForm.value.firstName);
      }
     
    
    });
   

   

  }

}
