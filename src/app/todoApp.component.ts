import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';

import { ITodoItem } from './components/todos/todo/todoItem.component.d';

import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todoApp.component.html',
  styleUrls: ['./todoApp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoAppComponent {
  public searchQuery: string;
  public isAuth: boolean;
  constructor(private authorizationService: AuthorizationService) {}

  isLoginFormVisible(): boolean {
    return this.authorizationService.isLoginFormVisible;
  }

  onSearchForTodos(query: string): void {
    this.searchQuery = query;
  }

  handleAuth(): void {
    this.isAuth = this.authorizationService.isAuthenticated();
  }

  ngOnDestroy() {
    this.authorizationService.authSubject.unsubscribe();
  }
 }
