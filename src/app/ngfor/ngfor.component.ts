import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title : string = 'top 3 Indian Movies';
  //array of objects
  movies: Movie[] = [
    { title: '3 Idiots',director:'Rajkumar Hirani',cast:'Amir khan',releaseDate:'2009'},
    { title: 'KGF',director:'Prashnth Neel',cast:'Yash',releaseDate:'2020'},
    { title: 'Tanhaji:The Unsung Warrior',director:'Om Raut',cast:'Ajay Devgan',releaseDate:'2020'},
    
  ]

  products :any[]|undefined;
  //we have injected demo service.
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {

    this.products = this._demoService.getProducts();
    console.log(this.products);

    this._demoService.getUserData().subscribe( (res) => {
      console.log('gettingdata from server',res);     
    } )

  }

}
