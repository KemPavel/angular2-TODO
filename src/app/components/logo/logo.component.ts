import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { ILogo } from './logo.component.d';
import { AuthorizationService } from '../../services/authorization.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  constructor(private authorizationService: AuthorizationService, private changeDetectorRef: ChangeDetectorRef) {}
  @Input() isAuth: boolean;
  userName: string;
  subscription: Observable<any>;
  title = 'Logo';

  ngOnInit(): void {
    this.isAuth = this.authorizationService.isAuthenticated();
  }

  ngOnChanges(): void {
    this.isAuth = this.authorizationService.isAuthenticated();
    this.getUserName();
  }

  onLoginButtonClick(): void {
    this.authorizationService.showLoginForm();
  };

  onLogoutButtonClick(): void {
    this.authorizationService.logout();
    this.isAuth = this.authorizationService.isAuthenticated();
  };

  isAuthenticated(): boolean {
    return this.isAuth;
  };

  getUserName(): void {
    this.subscription = this.authorizationService.getUserInfo();
    this.subscription.subscribe(user => {
      console.log(user);
      this.userName = user ? user.userName : '';
      this.changeDetectorRef.markForCheck();
    });
  }
}
