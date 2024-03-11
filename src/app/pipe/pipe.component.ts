import { Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  name: string = 'codemind'
  lastName: string = 'SPARROW'
  todaysDate = new Date();
  fullName :string = "jack SPARROW";
  price : number = 100;

  myObservable : any;
  miles! :number;
  constructor() { }

  ngOnInit(): void {

    this.myObservable = of('some text').pipe(delay(2000));
  }
  onMilesChange(event : any){
    console.log(event.target.value);
    this.miles = event.target.value;

  }

}
