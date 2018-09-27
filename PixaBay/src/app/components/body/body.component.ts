import { Component, OnInit } from '@angular/core';
import {PixbayservicesService} from '../../service/pixbayservices.service';
import { RoundPipe } from '../../pipe/round.pipe';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private _pixbayservice:PixbayservicesService) { }
   
  ngOnInit() {
    
  }
public pixbaydata:any = [];
const :number=12;

     
 ClickMe(queryParam:string){
  debugger;
this._pixbayservice.getimages(queryParam)
.subscribe( data=>this.pixbaydata=data);
console.log(this.pixbaydata);

 

  }
 


}