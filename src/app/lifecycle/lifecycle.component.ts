import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit ,
OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,
AfterViewChecked,OnDestroy
{
  @Input() color : any;
  // @ContentChild("child",{static: false}) contentChild: ElementRef|undefined;
  @ContentChild("child",{static: true}) contentChild: ElementRef|undefined;
  @ViewChild("childView",{static: false}) viewChild: ElementRef |undefined;

  counter: any;
  num:number = 1;
  subscription: Subscription
    //service are injected
    = new Subscription;

//service are injected
  constructor(private _demoService : DemoService) {
    console.log('LifecycleComponent constructor called');
    
   }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    clearInterval(this.counter)
    this.subscription.unsubscribe();

  }
 
  ngAfterContentChecked(): void {
    this.contentChild?.nativeElement.setAttribute('style',`color:${this.color}`);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called',this.contentChild);
    // this.contentChild?.nativeElement.setAttribute('style','color:green');
    // this.contentChild?.nativeElement.setAttribute('style',`color:${this.color}`);

  }

  ngDoCheck(): void {
    console.log('ngDoCheck lifecycle hooks called');
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges lifecycle hooks called',changes);
  }

  ngOnInit(): void {
    this.subscription = this._demoService.getUserData().subscribe(res=>{
      console.log(res);
      
    })
    this.counter =setInterval(()=>{
      this.num = this.num+1;
      console.log(this.num);
    },1000)
    console.log('ngOnInit lifecycle hooks called',this.viewChild);

    // this.contentChild?.nativeElement.setAttribute('style','color:red');

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called',this.viewChild);
    this.viewChild?.nativeElement.setAttribute('style',`color:${this.color}`);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called',this.viewChild);
    this.viewChild?.nativeElement.setAttribute('style',`color:${this.color}`);

  }

  test(){
    console.log("button called");
  }

  print(){
    console.log('input called');
    
  }
}
