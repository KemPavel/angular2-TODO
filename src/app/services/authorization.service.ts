import { Injectable } from '@angular/core';

@Injectable()

class userInfo {
  userName: string;
  password: string;
}

export class AuthorizationService {
  public isLoginFormVisible: boolean = false;

  showLoginForm(): void {
    this.isLoginFormVisible = true;
    console.log('login', this.isLoginFormVisible);
  };

  hideLoginForm(): void {
    this.isLoginFormVisible = false;
    console.log('logout', this.isLoginFormVisible);
  };

  login(userName: string, password: string): void {
    console.log('login');
    localStorage.setItem('userInfo', JSON.stringify({userName, password}));
    this.hideLoginForm();
  };

  logout(): void {
    localStorage.removeItem('userInfo');
    console.log(localStorage);
  };

  isAuthenticated(): boolean {
    return !!localStorage.getItem('userInfo');
  };

  getUserInfo(): string {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return userInfo.userName;
  };

}
