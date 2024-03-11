import { Component, OnInit } from '@angular/core';
import { Observable, delay, filter, forkJoin, from, interval, observable, of, take, takeLast, timer } from 'rxjs';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-rxjsoperator',
  templateUrl: './rxjsoperator.component.html',
  styleUrls: ['./rxjsoperator.component.css']
})
export class RxjsoperatorComponent implements OnInit {
myObservable:any;
  constructor(private _demoService : DemoService)  { }

  ngOnInit(): void {

    const obs1 = this._demoService.getphotos();
    const obs2 = this._demoService.getUserData();

    // //this is custom observable
    // const obs = from([1,2,3,4,5,6,7]);

    // //filter out non-even number
    // const example = obs.pipe(filter(num => num % 2 === 0));
    // example.subscribe(res => {
    //   console.log(`even number: ${res}`);
      
    // })

    // //nested subscription
    // of(42,54).subscribe((value) => {
    //   timer(3000).subscribe(()=> console.log(value));
    // });

    //create two custom obsevable

    const observable1 : Observable<string> = new Observable((observer) => {
      setTimeout(() => {
        observer.next('data from observable 1');
        observer.complete();
      },2000)
    });

    const observable2 : Observable<string> = new Observable((observer) => {
      setTimeout(() => {
        observer.next('data from observable 2');
        observer.complete();
      },3000)
    });

    //using forkjoin to combine multiple observables
    // forkJoin([obs1,obs2]).subscribe(res => {

    forkJoin([observable1,observable2]).subscribe(res => {
      console.log('forkjoin',res);
      
    });

    this.myObservable = of('Angular B9 batch').pipe(delay(5000));

    const numbers = interval(1000);
    numbers.pipe(take(3)).subscribe(res => console.log('take 3 :',res));

    const courses =['angular','javascript','HTML','CSS'];

    const source = from(courses);

    source.pipe(
      takeLast(2)
    ).subscribe(res => {
      console.log('take last',res);
      
    })
    
  }

}
