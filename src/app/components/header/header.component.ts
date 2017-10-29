import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IHeader } from './header.component.d';

@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  title = 'TODO app';
}
