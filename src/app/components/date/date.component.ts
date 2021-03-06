import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor, Validator, FormControl } from '@angular/forms';

@Component({
  selector: 'todo-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateComponent),
    multi: true
  }]
})

export class DateComponent implements ControlValueAccessor, Validator {

  private currentValue: string;

  setValue(event: any) {
    this.currentValue = event.target.value;
    this.onChange(this.currentValue); //have to call onChange() to update form view
  }

  validate(control: FormControl) {
    const DATE_REGEXP = /\d{2}\/\d{2}\/\d{4}$/;
    return DATE_REGEXP.test(control.value) ? null : {'invalidDate': true};
  }

  private onChange = (_: any) => {};
  private onTouched = () => {};

  public writeValue(value: any) {
    if (value) {
      this.currentValue = value;
    }
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}