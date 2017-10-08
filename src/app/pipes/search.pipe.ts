import { Pipe, PipeTransform } from '@angular/core';

import { ITodoItem } from '../components/todos/todo/todoItem.component.d';

@Pipe({
  name: 'searchByName'
})

export class SearchByNamePipe implements PipeTransform {
  transform(todos: ITodoItem[], query: string): ITodoItem[] {
    return todos && todos.length ? todos.filter(todo => todo.title.toLowerCase().search(query.toLowerCase()) >= 0) : todos;
  }
}
