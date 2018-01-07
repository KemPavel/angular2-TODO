import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";

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
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  @Input() isAuth: boolean;
  @Input() userName: string;
  title: string = 'Logo';
  homeUrl: string = '/Courses';

  public breadcrumb: string;

  ngOnInit() {
    this.isAuth = !!localStorage.token;
    this.userName = localStorage.userName;
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: any) => {
      this.breadcrumb = event.url.replace('courses/', ' course ');
      if (this.breadcrumb === this.homeUrl.toLowerCase()) {
        this.breadcrumb = '';
      }
      this.changeDetectorRef.markForCheck();
    });

    this.authorizationService.authSubject
    .subscribe((name) => {
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
      localStorage.clear();
      this.isAuth = false;
      this.userName = '';
      this.changeDetectorRef.markForCheck();
    });
  };

  isAuthenticated(): boolean {
    return this.isAuth;
  };
}
