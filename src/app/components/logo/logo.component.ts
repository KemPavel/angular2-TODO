import { Component } from '@angular/core';

import { ILogo } from './logo.component.d';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'todo-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  constructor(private authorizationService: AuthorizationService) {}

  isLoginButtonVisible = true;
  title = 'Logo';

  onLoginButtonClick(): void {
    this.authorizationService.showLoginForm();
    this.isAuthenticated();
  };

  onLogoutButtonClick(): void {
    this.authorizationService.hideLoginForm();
    this.isAuthenticated();
  };

  isAuthenticated(): void {
    this.isLoginButtonVisible = this.authorizationService.isAuthenticated();
  };
}
