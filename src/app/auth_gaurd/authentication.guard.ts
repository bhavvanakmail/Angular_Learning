import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  /**
   *
   */
  constructor( private _router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      //if user is not authenticated I will return false and if it is authenticated then redirect is
      if (localStorage.getItem('username')!=null) {
        return true;
      } else {
        this._router.navigate(['/login']);
        return false;
      }
  
  }
  
}
