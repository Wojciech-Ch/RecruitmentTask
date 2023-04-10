import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivateChild, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn()
      ? true
      : this.router.createUrlTree(['/auth/login']);
  }

  canActivateChild(): boolean | UrlTree {
    return this.authService.isLoggedIn()
      ? true
      : this.router.createUrlTree(['/auth/login']);
  }
}
