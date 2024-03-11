import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  //inject the DemoService
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
  }
  CreatePost(){
    const post = new Post();
    post.userId = 11;
    post.id = 1;
    post.title = "this is test title";
    post.body = "test body";

    this._demoService.createnewPost(post).subscribe((res)=>{
      console.log('POST method executed',res);
      
    })
  }

}
