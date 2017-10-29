import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ITodoItem } from '../components/todos/todo/todoItem.component.d';

const todos: ITodoItem[] = [
  {
    id: 0,
    title: 'Todo_1',
    date: '2017-10-27',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 90,
    topRated: true
  },
  {
    id: 1,
    title: 'Todo_2',
    date: '2017-12-19',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 750
  },
  {
    id: 2,
    title: 'Todo_3',
    date: '2017-11-04',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 30
  },
  {
    id: 3,
    title: 'Todo_4',
    date: '2017-09-04',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 450
  },
  {
    id: 4,
    title: 'Todo_5',
    date: '2017-06-22',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 230
  },
  {
    id: 5,
    title: 'Todo_6',
    date: '2017-10-20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 130
  }
];

@Injectable()

export class TodoListService {

  constructor(private http: Http) {}

  getTodos(): Observable<ITodoItem[]> {
    return Observable.create((observer: any) => {
      observer.next(todos);
    })
  };

  getNumberOfTodos(): number {
    return todos.length;
  }

  getTodoById(id: number): ITodoItem {
    return todos.find(todo => todo.id === id);
  };

  createTodo(): void {
  };

  updateTodo(): void {

  };

  deleteTodo(id: number): void {
    todos.splice(todos.findIndex(todo => todo.id === id), 1);
  };

}
