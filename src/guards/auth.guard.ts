import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        console.log("localStorage " +localStorage.getItem('currentUser'));
        if (localStorage.getItem('currentUser') != null) {
            // logged in so return true
            console.log("opa peraiii");
            return true;
        }
console.log("opa peraiii111");
        // not logged in so redirect to login page
        this.router.navigate(['/']);
        return false;
    }
}