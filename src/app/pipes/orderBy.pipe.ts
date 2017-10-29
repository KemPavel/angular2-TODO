import { Pipe, PipeTransform } from '@angular/core';

import { ITodoItem } from '../components/todos/todo/todoItem.component.d';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(todos: ITodoItem[]): ITodoItem[] {
    if (todos && todos.length) {
      return todos.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }
  }
}
