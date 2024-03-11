import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
private apiurl = "https://jsonplaceholder.typicode.com";

  products = [
    {name: 'laptop', id:'101'},
    {name: 'mobile', id:'102'},
    {name: 'TV', id:'103'},

  ]
//we need to inject HttpClient service to make HTTP request to server
  constructor(private _httpClient: HttpClient) { }

  Hello(){
    alert('Hello Everyone')
  }

  print() {
    alert('doc printed')
  }

  //ngfor component
  getProducts(){
    return this.products;
  }

  //ngfor component
  getUserData() :Observable<any> {
    return this._httpClient.get(`${this.apiurl}/users`);
  }
  getphotos() : Observable<any>{
    return this._httpClient.get(`${this.apiurl}/photos`);
  }
  createnewPost(body:any) : Observable<any>{
    return this._httpClient.post(`${this.apiurl}/posts`,body)
  }
}
