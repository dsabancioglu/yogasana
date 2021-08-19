import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService , private router: Router , private toastrService: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
      let logged = this.authService.isLoggedIn();

    if (logged) {
      return true;
    }
    this.router.navigate(["/login"]);
    this.toastrService.error("Sayfaya erişim için sisteme giriş yapmalısınız!");
    return false;
  }
  
}
