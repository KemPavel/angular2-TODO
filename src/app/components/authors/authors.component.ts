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
  private checkedAuthors: any = [];

  setValue(event: any) {
      const index = this.checkedAuthors.findIndex( (id: number) => id === event.target.id );
      if(index < 0) {
        this.checkedAuthors.push(event.target.id);
      } else {
        this.checkedAuthors.splice(index, 1);
      }
    this.onChange(this.checkedAuthors); //have to call onChange() to update form view
  }
  
  isChecked(): boolean {
      return false;
  }

  private onChange = (_: any) => {};
  private onTouched = () => {};

  public writeValue(value: any) {
    // if (value.length) {
    //   this.currentValue = value;
    // }
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}