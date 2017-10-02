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
  };

  hideLoginForm(): void {
    this.isLoginFormVisible = false;
  };

  login(userName: string, password: string): void {
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
