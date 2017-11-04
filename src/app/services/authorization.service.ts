import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()

class userInfo {
  userName: string;
  password: string;
}

export class AuthorizationService {
  public isLoginFormVisible: boolean = false;
  public authSubject = new Subject<any>();

  showLoginForm(): void {
    this.isLoginFormVisible = true;
  };

  hideLoginForm(): void {
    this.isLoginFormVisible = false;
  };

  login(userName: string, password: string): void {
    localStorage.setItem('userInfo', JSON.stringify({userName, password}));
    this.getUserInfo(userName);
    this.hideLoginForm();
  };

  logout(): void {
    localStorage.removeItem('userInfo');
    this.getUserInfo('');
  };

  isAuthenticated(): boolean {
    return !!localStorage.getItem('userInfo');
  };

  getUserInfo(name: string) {
    this.authSubject.next(name);
  };

}
