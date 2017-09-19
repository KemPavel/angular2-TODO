import { Component } from '@angular/core';

import { ILogo } from './logo.component.d';

@Component({
  selector: 'todo-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  title = 'Logo';
}
