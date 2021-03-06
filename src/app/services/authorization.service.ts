import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AuthorizedHttp } from './http.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Store } from '@ngrx/store'

@Injectable()

export class AuthorizationService {
  constructor(private http: AuthorizedHttp, private store: Store<any>) {
    this.isUserLoggedIn = this.store.select('auth');
  }

  public isLoginFormVisible: boolean = false;
  public authSubject = new Subject<any>();
  public isUserLoggedIn: Observable<boolean>;

  showLoginForm(): void {
    this.isLoginFormVisible = true;
  };

  hideLoginForm(): void {
    this.isLoginFormVisible = false;
  };

  login(userName: string, password: string): Observable<any> {
    this.getInfo({userName, password});
    this.hideLoginForm();
    this.store.dispatch({type: 'LOGIN_ACTION'});
    return this.http.post('http://localhost:3004/login', {userName, password})
      .map((res: Response) => res.json());

  };

  logout(): Observable<any> {
    this.getInfo('');
    this.store.dispatch({type: 'LOGOUT_ACTION'});
    return this.http.post('http://localhost:3004/logout', null)
      .map((res: Response) => res.json());
  };

  isAuthenticated(): Observable<boolean> {
    return this.isUserLoggedIn;
  };

  getUserInfo() {
    this.http.get('http://localhost:3004/userinfo')
      .map((res: Response) => res.json())
      .subscribe((data: any) => {
        this.getInfo(data);
      });

  };

  getInfo(data: any) {
    this.authSubject.next(data);
  }

}
