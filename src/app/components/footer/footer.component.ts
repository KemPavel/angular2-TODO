import { Component } from '@angular/core';

import { IFooter } from './footer.component.d';

@Component ({
  selector: 'todo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  author = 'Pavel Kazakov';
}
