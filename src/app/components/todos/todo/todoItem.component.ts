import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


import { ITodoItem } from './todoItem.component.d';

@Component({
  selector: 'todo-item',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  constructor() {

  }
    @Input() todo: ITodoItem;
    @Output() deleteTodo: EventEmitter<any> = new EventEmitter();

    onDeleteTodo(todo: ITodoItem): void {
      this.deleteTodo.emit(this.todo.id);
    }
}
