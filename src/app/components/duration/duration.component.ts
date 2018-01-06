import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor, Validator, FormControl } from '@angular/forms';

@Component({
  selector: 'todo-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DurationComponent),
    multi: true
  }]
})

export class DurationComponent implements ControlValueAccessor, Validator {

  private currentValue: string;

  setValue(event: any) {
    this.currentValue = event.target.value;
    this.onChange(this.currentValue); //have to call onChange() to update form view
  }

  validate(control: FormControl) {
    const DURATION_REGEXP = /^\d+$/;
    return DURATION_REGEXP.test(control.value) ? null : {'invalidDuration': true};
  }

  private onChange = (_: any) => {};
  private onTouched = () => {};

  public writeValue(value: any) {
    if (this.currentValue === undefined) {
        this.currentValue = '';
    }
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