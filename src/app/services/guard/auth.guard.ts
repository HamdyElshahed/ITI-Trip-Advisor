import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router, private authservice: AuthService){}
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    )
    : any  {
      if (!this.authservice.IsLoggedIn ) {
        this.router.navigateByUrl('/login');
      }
      // else return false;

      return true;
      // return this.authservice.IsLoggedIn;
  }

}
