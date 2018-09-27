import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() IsAuthenticated = new EventEmitter<boolean>();
  IsUserLoggedIn:boolean=false;
  constructor(private Sessionst:SessionStorageService) 
 {
    if(this.Sessionst.retrieve("token")!=null)
    {
      this.IsUserLoggedIn=true;
    }
    this.IsAuthenticated.emit(true);
   }

  ngOnInit() {
  }

}
