import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { Event } from '@angular/router/src/events';

@Component({
  selector: 'todo-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsComponent),
    multi: true
  }]
})

export class AuthorsComponent implements ControlValueAccessor {
  @Input() authors: Array<string>;
  private currentValue: any = [];

  setValue(author: string) {
      const index = this.currentValue.findIndex( (elem: string) => elem === author );
      if(index < 0) {
        this.currentValue.push(author);
      } else {
        this.currentValue.splice(index, 1);
      }
    this.onChange(this.currentValue); //have to call onChange() to update form view
  }

  private onChange = (_: any) => {};
  private onTouched = () => {};

  public writeValue(value: any): void {
    if (value.length) {
      this.currentValue = value;
    }
  }

  isChecked(author: string): boolean {
    return this.currentValue.includes(author);
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}