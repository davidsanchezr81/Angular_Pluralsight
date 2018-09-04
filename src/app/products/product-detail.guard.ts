import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate { // CanActivate is an Interface
  
  constructor(private router: Router){}
  
  
  canActivate(
    next: ActivatedRouteSnapshot, // This containes the information about the current router at any particular moment
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id  = +next.url[1].path;
      if (isNaN(id) || id < 1){  // if the result is not a number or is less than 1, it will fire up an error alert
        alert("Invalid product id");
        this.router.navigate(['/products']);
        return false; // after throwing the error it will return false to abort the current operation
      }
    return true;
  }


}
