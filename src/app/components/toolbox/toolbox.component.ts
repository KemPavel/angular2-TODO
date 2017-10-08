import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IToolbox } from './toolbox.component.d';

@Component({
  selector: 'todo-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})

export class ToolboxComponent {
 query: string;

@Output() searchForTodos: EventEmitter<any> = new EventEmitter();

 onFindButtonClick(): void {
   this.searchForTodos.emit(this.query);
 }
}
