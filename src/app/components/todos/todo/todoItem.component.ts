import { Component, Input } from '@angular/core';

import { ITodoItem } from './todoItem.component.d';

@Component({
  selector: 'todo-item',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.css']
})
export class TodoItemComponent {
    @Input() todo: ITodoItem; 
}
