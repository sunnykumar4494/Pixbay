import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  IsUserLoggedIn:boolean=false;
  constructor(private Sessionst:SessionStorageService) { 

    if(this.Sessionst.retrieve("token")!=null)
    {
      this.IsUserLoggedIn=true;
    }
  }

  ngOnInit() {
  }

}
