import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class SpinnerService {
  public spinnerSubject = new Subject<any>();

  show(): void {
    this.spinnerSubject.next(true);
  }

  hide(): void {
    this.spinnerSubject.next(false);
  }

}
