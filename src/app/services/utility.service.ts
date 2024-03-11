import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
//Subject and BehaviorSubject is a observable
  // userName = new Subject<any>(); //initialise the values
  userName = new BehaviorSubject('bhavana'); //BehaviorSubject is used to give default Value
  constructor() { }
}
