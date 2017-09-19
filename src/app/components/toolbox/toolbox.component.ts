
import { Component, Input } from '@angular/core';

import { IToolbox } from './toolbox.component.d';

@Component({
  selector: 'todo-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})

export class ToolboxComponent {
 query: string;

 onFindButtonClick(): void {
   console.log(this.query);
 }

}
