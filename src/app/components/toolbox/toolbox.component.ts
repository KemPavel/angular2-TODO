import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IToolbox } from './toolbox.component.d';

@Component({
  selector: 'todo-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolboxComponent {
 query: string;

@Output() searchForTodos: EventEmitter<any> = new EventEmitter();

 onFindButtonClick(): void {
   this.searchForTodos.emit(this.query);
 }
}
