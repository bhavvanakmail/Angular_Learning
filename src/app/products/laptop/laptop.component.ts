import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit ,DoCheck{

  constructor() { }
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
