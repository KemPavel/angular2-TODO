import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'todo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  private userName: string;
  private password: string;

  @Output() login: EventEmitter<any> = new EventEmitter();

  constructor(private authorizationService: AuthorizationService) {}

  onLogin(): void {
    this.authorizationService.login(this.userName, this.password);
    this.login.emit();
    console.log(`YOU HAVE SUCESSFULLY LOGGED IN WITH NAME: ${this.userName} AND PASSWORD: ${this.password}`);
  }

  closeLoginForm(): void {
    this.authorizationService.hideLoginForm();
  }
}
