import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthorizedHttp extends Http {

  constructor (backend: XHRBackend, options: RequestOptions) {
    options.headers.set('Authorization', 'token');
    super(backend, options);
  }
}
