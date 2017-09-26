import { Component, Input } from '@angular/core';

import { TodoListService } from '../todoList.service';

import { ITodoItem } from './todoItem.component.d';

@Component({
  selector: 'todo-item',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.css'],
  providers: [TodoListService]
})
export class TodoItemComponent {
  constructor(private todoListService: TodoListService) {

  }
    @Input() todo: ITodoItem;

    deleteTodo(todo: ITodoItem): void {
      this.todoListService.deleteTodo(todo.id);
    }
}
