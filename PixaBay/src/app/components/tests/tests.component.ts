import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  compute(s:number)
  {
    if(s<0)
    {
      return 0;
    }
    else{
      return s+1;
    }
  }


}



