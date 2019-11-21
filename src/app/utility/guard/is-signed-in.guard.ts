import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

  constructor(
    private router: Router,
    private service:SessionService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<boolean>{
    return new Promise((resolve) => {
      const status = this.service.isSignedIn();
      if(!status){
        this.router.navigate(['signin']);
      }
      resolve(status);
    });
    
  }
  
}
