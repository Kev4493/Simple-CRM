import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public isLoggedIn: boolean

  constructor() {
    this.isLoggedIn = true;
   }
}
