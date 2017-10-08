import { Component } from '@angular/core';

import { ITodoItem } from './components/todos/todo/todoItem.component.d';

import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todoApp.component.html',
  styleUrls: ['./todoApp.component.css']
})

export class TodoAppComponent {
  public searchQuery: string;
  constructor(private authorizationService: AuthorizationService) {}

  isLoginFormVisible(): boolean {
    return this.authorizationService.isLoginFormVisible;
  }

  onSearchForTodos(query: string): void {
    console.log('appComponent', query);
    this.searchQuery = query;
  }
 }
