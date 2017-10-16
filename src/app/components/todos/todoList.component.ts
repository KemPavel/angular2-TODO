import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SearchByNamePipe } from '../../pipes/search.pipe';
import { Observable } from 'rxjs/Observable';

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
  constructor(private todoListService: TodoListService, private searchPipe: SearchByNamePipe, private changeDetectorRef: ChangeDetectorRef) {}
  @Input() searchQuery: string;
  observTodos: Observable<ITodoItem[]>;
  allTodos: ITodoItem[];
  todos: ITodoItem[];

  ngOnInit(): void {
    this.observTodos = this.todoListService.getTodos();
    this.observTodos.subscribe((data) => {
      this.todos = data;
      this.changeDetectorRef.markForCheck();
    })

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
    this.todoListService.getTodos().subscribe( data => this.allTodos = data);
    // this.todos = this.todoListService.getTodos();
  }

  isCoursesShown(): boolean {
    return !!this.todoListService.getNumberOfTodos();
  }
}
