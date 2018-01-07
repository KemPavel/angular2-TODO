import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { TodoListComponent } from './components/todos/todoList.component';
import { AddFormComponent } from './components/form/addForm.component';
import { ErrorPageComponent } from './components/errorPage/errorPage.component';

import { AuthGuardService } from './services/authGuard.service';

export const router: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses/new', component: AddFormComponent, canActivate: [AuthGuardService] },
    { path: 'courses/:id', component: AddFormComponent, canActivate: [AuthGuardService] },
    { path: 'courses', component: TodoListComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorPageComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);