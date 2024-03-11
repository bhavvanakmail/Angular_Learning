import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl : string = 'http://localhost:3000/todos';
  constructor(private _httpClient: HttpClient) { }
  
  //this is the get method which will retun todos.
  list() : Observable<any> {
  return this._httpClient.get(this.apiUrl);
}

//create a - post
create(data: any): Observable<any> {
  return this._httpClient.post(this.apiUrl,data)
}

//UPDATE
update(id: any,data:any) :Observable <any> {
  let API_URL = `${this.apiUrl}/${id}`;
  return this._httpClient.put(API_URL,data);
}

//Delete

delete(id:any) : Observable<any> {
  let API_URL = `${this.apiUrl}/${id}`;

  return this._httpClient.delete(API_URL);
}

}
