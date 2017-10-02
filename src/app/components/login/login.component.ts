import { Component } from '@angular/core';

import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'todo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  private userName: string;
  private password: string;

  constructor(private authorizationService: AuthorizationService) {}

  login(): void {
    this.authorizationService.login(this.userName, this.password);
    console.log(`YOU HAVE SUCESSFULLY LOGGED IN WITH NAME: ${this.userName} AND PASSWORD: ${this.password}`);
  }

  closeLoginForm(): void {
    this.authorizationService.hideLoginForm();
  }
}
