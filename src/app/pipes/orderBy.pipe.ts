import { Pipe, PipeTransform } from '@angular/core';

import { ITodoItem } from '../components/todos/todo/todoItem.component.d';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(todos: ITodoItem[]): ITodoItem[] {
    if (todos && todos.length) {
      return todos.sort((a, b) => {
        return Date.parse(b.date.split("/").reverse().join("-")) - Date.parse(a.date.split("/").reverse().join("-"))});
    }
  }
}
