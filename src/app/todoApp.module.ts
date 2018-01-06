import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HighlightBorder } from './directives/highlightBorder.directive';

import { ConvertDurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { SearchByNamePipe } from './pipes/search.pipe';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { TodoAppComponent } from './todoApp.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { TodoListComponent } from './components/todos/todoList.component';
import { TodoItemComponent } from './components/todos/todo/todoItem.component';
import { AddFormComponent } from './components/form/addForm.component';
import { FooterComponent } from './components/footer/footer.component';
import { DateComponent } from './components/date/date.component';
import { DurationComponent } from './components/duration/duration.component';
import { AuthorsComponent } from './components/authors/authors.component';

import { AuthorizationService } from './services/authorization.service';
import { TodoListService } from './services/todoList.service';
import { SpinnerService } from './services/spinner.service';
import { AuthorizedHttp } from './services/http.service';
import { FormService } from './services/form.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthorizationService,
    TodoListService,
    SpinnerService,
    AuthorizedHttp,
    FormService
  ],
  declarations: [
    HighlightBorder,
    ConvertDurationPipe,
    OrderByPipe,
    SearchByNamePipe,
    SpinnerComponent,
    TodoAppComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    AddFormComponent,
    ToolboxComponent,
    TodoListComponent,
    TodoItemComponent,
    FooterComponent,
    DateComponent,
    DurationComponent,
    AuthorsComponent
  ],
  bootstrap: [ TodoAppComponent ]
})
export class TodoAppModule { }
