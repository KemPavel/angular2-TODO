import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store'

import 'rxjs/add/operator/map';

@Injectable()

export class FormService {
  public formSubject = new Subject<any>();

  constructor(private http: Http, private store: Store<any>) {}

  getAuthors(): void {
    this.http.get('http://localhost:3004/authors')
      .map((res: any) => res.json())
      .subscribe((authors) => {
        this.store.dispatch({type: 'GET_AUTHORS', payload: authors});
        // this.formSubject.next(authors);
      });
  };

}
