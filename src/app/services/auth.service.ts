import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //rapid api
  

  constructor() { }

  login(username: any, password: any){
    if(username == 'admin' && password == 'codemind@7'){
      localStorage.setItem('username','admin');
      return true;
    }
    else{
      return false;
    }
  }
}
