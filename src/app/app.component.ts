import { Component } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';
  public isLoggedIn: boolean;

  constructor(private authentification: AuthentificationService) {
    this.isLoggedIn = this.authentification.isLoggedIn;
  }

}
