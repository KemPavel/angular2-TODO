import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { TodoListService } from '../../services/todoList.service';
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
    this.todos = this.todoListService.getTodos();
  }

  getTodoById(id: number): void {
    this.todoListService.getTodoById(id);
  }

  handleDeleteTodo(id: number): void {
    console.log(id);
    const isDeleteConfirmed: boolean = confirm('Do you really want to delete this course?');
    isDeleteConfirmed && this.todoListService.deleteTodo(id);
  }
}
