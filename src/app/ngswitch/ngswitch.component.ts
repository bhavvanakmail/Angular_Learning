import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectProduct: any = '';
  //inject demoService
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
    this._demoService.print()
  }
  getProductValue(val: any) {
  console.log(val.target.value);
  this.selectProduct = val.target.value;
  
  }
}
