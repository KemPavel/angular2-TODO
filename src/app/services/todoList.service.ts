import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store'

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
  public todosSubject = new Subject<any>();

  constructor(private http: Http, private store: Store<any>) {}

  getTodos(): void {
    this.http.get('http://localhost:3004/todos')
      .map((res: any) => res.json())
      .subscribe((todos) => {
        this.store.dispatch({type: 'UPDATE_TODOS', payload: todos})
      });
  };

  getNumberOfTodos(): number {
    return todos.length;
  }

  getTodoById(id: number): void {
    this.http.get(`http://localhost:3004/todos/${id}`)
      .map( (res: any) => res.json())
      .subscribe( todo => {
        this.todosSubject.next(todo);
      })
  };

  searchForTodos(search: string = '', showAll?: string): void {
    this.http.get('http://localhost:3004/todos?search=' + search + '&all=' + showAll)
      .map((data: Response) => data.json())
      .subscribe((todos) => {
        this.store.dispatch({type: 'UPDATE_TODOS', payload: todos})
      });
  }

  updateTodo(todo: ITodoItem): void {
    this.http.post(`http://localhost:3004/todos/${todo.id}`, todo)
      .map( (res: Response) => res.json())
      .subscribe( todo => {
        this.store.dispatch({type: 'UPDATE_TODOS', payload: todos})
      });
  };

  updateTodos(todos: ITodoItem[]): void {
    this.todosSubject.next(todos);
  }

  deleteTodo(id: number): void {
    this.http.delete('http://localhost:3004/todos/' + id)
      .subscribe(() => {
        this.getTodos();
      });
  };

}
