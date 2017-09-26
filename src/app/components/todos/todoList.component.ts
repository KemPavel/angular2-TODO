import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { TodoListService } from './todoList.service';
import { ITodoItem } from './todo/todoItem.component.d';

@Component({
  selector: 'todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css'],
  providers: [TodoListService]
})

export class TodoListComponent {
  constructor(private todoListService: TodoListService) {

  }
  todos: ITodoItem[];

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    console.log('initialize todo items ARRAY by Angular onInit lifecycle-hook');
    this.todos = this.todoListService.getTodos();
  }

  getTodoById(id: number): void {
    this.todoListService.getTodoById(id);
  }
}
