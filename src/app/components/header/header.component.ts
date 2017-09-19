import { Component } from '@angular/core';

import { IHeader } from './header.component.d';

@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title =  'TODO app';
}
