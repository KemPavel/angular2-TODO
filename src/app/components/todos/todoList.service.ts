import { Injectable } from '@angular/core';

import { ITodoItem } from './todo/todoItem.component.d';
let TODOS: ITodoItem[] = [
  {
    id: 0,
    title: 'TODO_1',
    date: '19.09.2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: '1h 30min'
  },
  {
    id: 1,
    title: 'TODO_2',
    date: '19.09.2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: '12h 30min'
  },
  {
    id: 2,
    title: 'TODO_3',
    date: '19.09.2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: '30min'
  },
];

@Injectable()

export class TodoListService {
  getTodos(): ITodoItem[] {
    return TODOS;
  };

  getTodoById(id: number): ITodoItem {
    return TODOS.find(todo => todo.id === id);
  };

  createTodo(): void {
  };

  updateTodo(): void {

  };

  deleteTodo(id: number): void {
    console.log(345);
    TODOS = TODOS.filter(todo => todo.id !== id);
    console.log(TODOS);
  };

}
