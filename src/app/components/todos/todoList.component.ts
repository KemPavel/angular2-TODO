import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { SearchByNamePipe } from '../../pipes/search.pipe';

import { TodoListService } from '../../services/todoList.service';
import { ITodoItem } from './todo/todoItem.component.d';

@Component({
  selector: 'todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css'],
  providers: [TodoListService, SearchByNamePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent {
  constructor(private todoListService: TodoListService, private searchPipe: SearchByNamePipe) {}
  @Input() searchQuery: string;
  allTodos: ITodoItem[];
  todos: ITodoItem[];

  ngOnInit(): void {
    this.allTodos = this.todoListService.getTodos();
    this.todos = this.allTodos;
  }

  ngOnChanges(): void {
    this.todos = this.searchPipe.transform(this.allTodos, this.searchQuery);
  }

  getTodoById(id: number): void {
    this.todoListService.getTodoById(id);
  }

  handleDeleteTodo(id: number): void {
    console.log(this.todos);
    const isDeleteConfirmed: boolean = confirm('Do you really want to delete this course?');
    isDeleteConfirmed && this.todoListService.deleteTodo(id);
    this.todos = this.todoListService.getTodos();
  }

  isCoursesShown(): boolean {
    return !!this.todoListService.getTodos().length;
  }
}
