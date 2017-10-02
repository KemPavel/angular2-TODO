import { Component } from '@angular/core';

import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todoApp.component.html',
  styleUrls: ['./todoApp.component.css']
})

export class TodoAppComponent {
  constructor(private authorizationService: AuthorizationService) {}

  isLoginFormVisible(): boolean {
    return this.authorizationService.isLoginFormVisible;
  }
 }
