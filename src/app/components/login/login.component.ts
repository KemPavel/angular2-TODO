import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { AuthorizationService } from '../../services/authorization.service';
import { SpinnerService } from '../../services/spinner.service';

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

  constructor(
    private authorizationService: AuthorizationService,
    private spinnerService: SpinnerService
  ) {}

  onLogin(): void {
    this.authorizationService.login(this.userName, this.password)
      .subscribe((data: any) => {
        console.log(data);
      });
    this.login.emit();
    this.spinnerService.show();
    this.test();
    console.log(`YOU HAVE SUCESSFULLY LOGGED IN WITH NAME: ${this.userName} AND PASSWORD: ${this.password}`);
  }

  test(): void {
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  closeLoginForm(): void {
    this.authorizationService.hideLoginForm();
  }
}
