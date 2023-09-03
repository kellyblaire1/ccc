// import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
// export const adminGuard: CanActivateFn = (route, state) => {
//   return true;
// };
declare var window:any;

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: StorageService,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const user:any = this.storage.get('user')
      if (
        user && user.account==="1"
      ) { return true; }
      // this.router.navigateByUrl('/login');
      window.location.assign('/login');
      return false;
  }
}