import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_DATE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateComponent),
  multi: true
};

@Component({
  selector: 'todo-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [CUSTOM_DATE_VALUE_ACCESSOR]
})

export class DateComponent implements ControlValueAccessor {
  @Input() dateValue: string;

  // currentValue: string = this.getCurrentDate();

  ngOnInit() {
    this.dateValue = this.getCurrentDate();
  }

  setValue(event: any) {
    this.dateValue = event.target.value;
  }

  set value(newValue: any) {
    if (newValue) {
      this.dateValue = newValue;
      this.onChange(newValue);
    }
  }

  get value() {
    return this.dateValue;
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any) {
    if (value !== this.dateValue) {
      this.dateValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  getCurrentDate() {
    let today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if(dd < 10) dd = '0' + dd;

    if(mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
  }

}




// export interface ControlValueAccessor {
//   writeValue(obj: any): void;
//
//   registerOnChange(fn: any): void;
//
//   registerOnTouched(fn: any): void;
//
//   setDisabledState?(isDisabled: boolean): void;
// }
