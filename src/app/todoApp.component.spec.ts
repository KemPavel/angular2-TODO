import { TestBed } from '@angular/core/testing';

import { TodoAppComponent } from './todoApp.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TodoAppComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(TodoAppComponent);
    expect(fixture.componentInstance instanceof TodoAppComponent).toBe(true, 'should create AppComponent');
  });
});
