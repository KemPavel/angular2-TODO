import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { TodoListComponent } from './components/todos/todoList.component';
import { AddFormComponent } from './components/form/addForm.component';
import { FooterComponent } from './components/footer/footer.component';
import { DateComponent } from './components/date/date.component';
import { DurationComponent } from './components/duration/duration.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { ModuleWithComponentFactories } from '@angular/core/src/linker/compiler';
import { ErrorPageComponent } from './components/errorPage/errorPage.component';

export const router: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses/new', component: AddFormComponent },
    { path: 'courses/:id', component: AddFormComponent },
    { path: 'courses', component: TodoListComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorPageComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);