import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MockBackend, MockConnection  } from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { TodoListService } from './todoList.service';
import { SpinnerService } from './spinner.service';
import { AuthorizedHttp } from './http.service';



describe('todoListService', () => {
  let testingService: TodoListService = null;
  let spinnerService: SpinnerService = null;
  let backend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule(
      { 
        imports: [ HttpModule ],
        declarations: [ ],
        providers: [ SpinnerService, {provide: AuthorizedHttp, useClass: MockBackend}, TodoListService ]
      }
    );
  });
  beforeEach(inject([SpinnerService, AuthorizedHttp, TodoListService], (spinnerService: SpinnerService, http: MockBackend, todoListService: TodoListService) => {
    testingService = todoListService;
    backend = http;
  }));

  it('should return length of todos', () => {
    const result = testingService.getNumberOfTodos();

    expect(result).toEqual(6);
  });

  it('should update list of todos', () => {
    const newTodo = [{
        id: 0,
        title: 'Todo_1',
        date: '2017-10-27',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
        duration: 90,
        topRated: true
    }];


    spyOn(testingService.todosSubject, 'next');

    testingService.updateTodos(newTodo);

    expect(testingService.todosSubject.next).toHaveBeenCalledWith(newTodo);
  });

});