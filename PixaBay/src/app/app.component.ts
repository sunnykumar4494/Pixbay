import { Component, OnInit} from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  IsAuthenticated:boolean=false;
  constructor(private Sessionst:SessionStorageService) { 
    if(this.Sessionst.retrieve("token")!=null)
    this.IsAuthenticated=true;
    else
    this.IsAuthenticated=false;
  }
  ngOnInit() {
    if(this.Sessionst.retrieve("token")!=null)
    {
    this.IsAuthenticated=true;
    }
    else{
      this.IsAuthenticated=false;
    }
  }
   

  Authentication(IsAuth:boolean){
    debugger
    if(this.Sessionst.retrieve("token")!=null)
this.IsAuthenticated=true;
console.log(this.IsAuthenticated);
  }

  onVoted(agreed: boolean) {
    this.IsAuthenticated=agreed;
    console.log("Function Called:");
  }
}
