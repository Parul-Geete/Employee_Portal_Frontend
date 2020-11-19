import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class RegistrationValidator {
    path: ActivatedRouteSnapshot[];  route: ActivatedRouteSnapshot;
}
