import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
