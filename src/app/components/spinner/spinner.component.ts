import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'todo-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpinnerComponent {
  public isSpinnerShown: boolean;
  constructor(private spinnerService: SpinnerService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.spinnerService.spinnerSubject.subscribe(
      (value: boolean) => {
        console.log(value)
        this.isSpinnerShown = value;
        this.changeDetectorRef.markForCheck();
      }
    );
  }
}
