import { Component } from '@angular/core';

import { ILogo } from './logo.component.d';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'todo-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  providers: [AuthorizationService]
})
export class LogoComponent {
  constructor(private authorizationService: AuthorizationService) {}

  title = 'Logo';

  onLoginButtonClick(): void {
    this.authorizationService.showLoginForm();
  };

  onLogoutButtonClick(): void {
    this.authorizationService.hideLoginForm();
  };

  isAuthenticated(): boolean {
    return this.authorizationService.isAuthenticated();
  };
}
