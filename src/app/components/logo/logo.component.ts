import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { ILogo } from './logo.component.d';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'todo-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  constructor(
    private authorizationService: AuthorizationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  @Input() isAuth: boolean;
  @Input() userName: string;
  title: string = 'Logo';

  ngOnInit() {
    this.authorizationService.authSubject
    .subscribe((name) => {
      console.log(name);
      this.isAuth = !!name.userName;
      this.userName = name.userName;
      this.changeDetectorRef.markForCheck();
    });
  }

  onLoginButtonClick(): void {
    this.authorizationService.showLoginForm();
  };

  onLogoutButtonClick(): void {
    this.authorizationService.logout()
    .subscribe((data: any) => {
      this.isAuth = false;
      this.userName = '';
      this.changeDetectorRef.markForCheck();
      console.log(data);
    });
  };

  isAuthenticated(): boolean {
    return this.isAuth;
  };
}
