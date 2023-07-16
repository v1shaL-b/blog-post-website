import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard {
  
    constructor(private authService: AuthService, private router: Router) { }
    canActivate():
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      if (!this.authService.isLoggedIn()) {
        
        this.router.navigate(['/auth']);
        return false;
      }
      // logged in, so return true
      this.authService.isLoggedIn();
      return true;
    }
  }