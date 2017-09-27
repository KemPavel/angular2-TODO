import { Component } from '@angular/core';

import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todoApp.component.html',
  styleUrls: ['./todoApp.component.css'],
  providers: [AuthorizationService]
})

export class TodoAppComponent {
  constructor(private authorizationService: AuthorizationService) {}

  isLoginFormVisible(): boolean {
    console.log(this.authorizationService.isLoginFormVisible);
    return this.authorizationService.isLoginFormVisible;
  }
 }
