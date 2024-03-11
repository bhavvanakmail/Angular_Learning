import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

//Input decorator property

//   @Input() message : string | undefined;
  @Input('childProp') message : object | undefined;

// newPrice is a Output decorator property
  @Output() public newPrice = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log('value comes from parent component',this.message);

  }

  onChange(value : any){
    console.log(value);
    this.newPrice.emit(value);
    
  }
}
