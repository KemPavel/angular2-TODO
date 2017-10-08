import { Pipe, PipeTransform } from '@angular/core';

import { ITodoItem } from '../components/todos/todo/todoItem.component.d';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(todos: ITodoItem[]): ITodoItem[] {
    return todos.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  }
}
