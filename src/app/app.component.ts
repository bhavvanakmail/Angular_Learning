import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RapidapiService } from './services/rapidapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //inject the rapidApi service
  constructor(private _rapidApiService:RapidapiService) {
   
  }
  isChildCompExist : boolean = true;
  color = 'red';
  lstname = 'mali';
  title = 'angularapp';
  sendData:any = 'the data is coming from parent component';
  price : any;

  destroy(){
    this.isChildCompExist = false;
  }
  getDataFromChild(val: any){
    console.log('value coming from child component',val);
   this.price = val; 
  }
  ngOnInit(): void {

    this._rapidApiService.getAutoComplete('tesla','US').subscribe((res)=>{
      console.log('rapid api auto complete',res);
      
    })

    // this._rapidApiService.getSummary("","").subscribe((res)=>{
    //   console.log('getting data from rapid api get method',res);
      
    // })


    //creating an observable
    const myObservable = new Observable(observer => {
      observer.next('data 1');
      observer.next('data 2');
      observer.complete();
      //observer.error('error is occured');
    })
    myObservable.subscribe((res) => {
      console.log('my custom observable',res);
    });
  }
}
