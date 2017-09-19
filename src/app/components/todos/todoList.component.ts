import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ITodoItem } from './todo/todoItem.component.d';

const TODOS: ITodoItem[] = [
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

@Component({
  selector: 'todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})

export class TodoListComponent {
  todos: ITodoItem[];

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): ITodoItem[] {
    console.log('initialize todo items ARRAY by Angular onInit lifecycle-hook');
    return this.todos = TODOS;
  }
}
