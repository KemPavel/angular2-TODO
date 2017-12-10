import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgModelGroup } from '@angular/forms';


@Component({
  selector: 'todo-add-form',
  templateUrl: './addForm.component.html',
  styleUrls: ['./addForm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFormComponent {
  todo = {};

  submit(form: any): void {
    console.log(form.value.todo);
  }
}
