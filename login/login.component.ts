 
import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

  @Output() IsAuthenticated = new EventEmitter<boolean>();
  @Output() voted = new EventEmitter<boolean>();

  IsAuthenticated1:boolean=false;
  datauser:any;
  onSubmitLogin()
  {
    debugger;
    console.log(this.LoginForm.value);
    this.IsAuthenticated1=true;
    this.IsAuthenticated.emit(true);
    this.voted.emit(true);
  //  this._getuserservice.getUser("sunny","kumar")
  //  .subscribe( res=>this.datauser=res)
   console.log(this.datauser);


  
  }

}
