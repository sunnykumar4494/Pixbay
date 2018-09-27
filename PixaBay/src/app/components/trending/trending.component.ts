import { Component, OnInit } from '@angular/core';

import {PixbayservicesService} from '../../service/pixbayservices.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private _pixbayservice:PixbayservicesService) { }
   
  ngOnInit() {
    
    this._pixbayservice.getimages("Tech")
.subscribe( data=>this.pixbaydata=data);
  }
  public pixbaydata:any = [];
}
