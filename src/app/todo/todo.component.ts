import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: any = [];
  //inject the TodoService
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }
  getTodos(){
    this._todoService.list().subscribe((res) =>{
      console.log('getting data from local json server',res);
      this.todoList = res;
  })
}
createTodo(){
  let todo = {
    id: new Date().getTime(),
    name: `practice decorator`
  }
  this._todoService.create(todo).subscribe((res)=>{
    console.log('create method called',res);
    this.getTodos();

  })
}
  editTodo(todo: any){
    let data = {
      id: new Date().getTime(),
      name: `Edit practice decorator`
    }
    this._todoService.update(todo.id, data).subscribe((res)=>{
      console.log(res);
      this.getTodos(); 
    })
  }
  deleteTodo(id: any){
    this._todoService.delete(id).subscribe((res)=>{
      alert(`Todo Deleted`);
      this.getTodos();
    })
  }

}
