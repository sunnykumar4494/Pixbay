import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 userName:string="";
 constructor(private Sessionst:SessionStorageService,private _router:Router) {

   
  }


  ngOnInit() {
     this.userName=this.Sessionst.retrieve("user"); 
    // alert(this.userName);
  }
  Logout()
  {
    this.Sessionst.clear("token");
   
    location.reload();
    //this._router.navigate(['./APP']);
  }
}
