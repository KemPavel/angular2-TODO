import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SearchByNamePipe } from '../../pipes/search.pipe';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store'

import { TodoListService } from '../../services/todoList.service';
import { SpinnerService } from '../../services/spinner.service';
import { ITodoItem } from './todo/todoItem.component.d';

@Component({
  selector: 'todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css'],
  providers: [SearchByNamePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent implements OnInit {
  constructor(
    private todoListService: TodoListService,
    private searchPipe: SearchByNamePipe,
    private changeDetectorRef: ChangeDetectorRef,
    private spinnerService: SpinnerService,
    private store: Store<any>
  ) {
    this.courses$ = this.store.select('todoList');
    this.courses$.subscribe(
      (res) => {
          this.todos = res;
          this.changeDetectorRef.markForCheck();
    });
  }

  @Input() searchQuery: string;
  allTodos: ITodoItem[];
  todos: ITodoItem[];
  showAll: boolean = true;
  courses$: any;

  ngOnInit(): void {
    this.todoListService.getTodos();
  }

  ngOnChanges(): void {
    this.todos = this.searchPipe.transform(this.searchForTodos(), this.searchQuery);
  }

  searchForTodos(): any {
    this.todoListService.searchForTodos(this.searchQuery)
  }

  getTodoById(id: number): void {
    this.todoListService.getTodoById(id);
  }

  getMoreTodos(): void {
    this.showAll = false;
    this.todoListService.searchForTodos('', 'showAll');
  }

  handleDeleteTodo(id: number): void {
    console.log(this.todos);
    const isDeleteConfirmed: boolean = confirm('Do you really want to delete this course?');
    isDeleteConfirmed && this.todoListService.deleteTodo(id);
    this.todoListService.deleteTodo(id);
    this.spinnerService.show();
    this.test();
  }

  test(): void {
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  isCoursesShown(): boolean {
    return !!this.todoListService.getNumberOfTodos();
  }
}
