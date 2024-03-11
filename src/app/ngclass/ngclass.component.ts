import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  flag: boolean = false;

  peoples:any [] = [
    {
      'name' : 'Jack',
      'country' : 'UK'
    },
    {
      'name' : 'Rocky',
      'country' : 'USA'
    },
    {
      'name' : 'Hira',
      'country' : 'HK'
    },
    {
      'name' : 'Harry',
      'country' : 'UK'
    },
    {
      'name' : 'Surya',
      'country' : 'USA'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeFlag()
  {
    if (this.flag == true) {
      this.flag = false;
    }else{
      this.flag = true
    }
  }

}
