import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName: any;

  //Inject the utility service
  constructor(private _utilityService: UtilityService) { 
    this._utilityService.userName.subscribe((res)=> {
      console.log('subject observable data',res);
      this.userName = res;

      
    })
  }

  ngOnInit(): void {
  }
  updateUserName(userName: any){
    this._utilityService.userName.next(userName.value)
  }

}
