import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }
  login(eml : any, password :any){

    var output = this._authService.login(eml,password);

    // console.log(eml,password);
    if (output) {
      //go to home
      alert('login successfully');
      this._router.navigate(['product']);
    }else{
      //go to login
      alert('invalid username and password')
      this._router.navigate(['login']);
    }

  }
}
