import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodoAppComponent } from './todoApp.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { TodoListComponent } from './components/todos/todoList.component';
import { TodoItemComponent } from './components/todos/todo/todoItem.component';
import { FooterComponent } from './components/footer/footer.component';

import { AuthorizationService } from './services/authorization.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorizationService
  ],
  declarations: [
    TodoAppComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    ToolboxComponent,
    TodoListComponent,
    TodoItemComponent,
    FooterComponent
  ],
  bootstrap: [ TodoAppComponent ]
})
export class TodoAppModule { }
