import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AddFormComponent } from './addForm.component';
import { AuthorsComponent } from '../authors/authors.component';
import { DateComponent } from '../date/date.component';
import { DurationComponent } from '../duration/duration.component';

import { FormService } from '../../services/form.service';
import { TodoListService } from '../../services/todoList.service';
import { SpinnerService } from '../../services/spinner.service';

describe('AddFormComponent', () => {

    let comp:    AddFormComponent;
    let fixture: ComponentFixture<AddFormComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;
    

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ 
          AddFormComponent, 
          AuthorsComponent,
          DateComponent,
          DurationComponent 
        ], 
        imports: [ 
          ReactiveFormsModule,
          HttpModule,
          RouterTestingModule
        ],
        providers: [
          FormService,
          TodoListService,
          SpinnerService
        ]
      })
      .compileComponents();  // compile template and css
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AddFormComponent);
  
      comp = fixture.componentInstance; // AddFormComponent test instance
  
      // query for the title <form> by CSS element selector
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });

    it ('should work', () => {
      expect(fixture.componentInstance instanceof AddFormComponent).toBe(true, 'should create AddFormComponent');
    });

    it ('form group is valid if controls filled correctly', () => {
      comp.ngOnInit();
      fixture.detectChanges();
      comp.formGroup.setValue({
        title: 'title',
        description: 'description',
        date: comp.getCurrentDate(),
        duration: 123,
        authors: ['author1', 'author2']
      });
      const result = comp.isFormValid();
  
      expect(result).toBeTruthy();
    });

    it ('form group is invalid if controls are not filled', () => {
      comp.ngOnInit();
      fixture.detectChanges();
      comp.formGroup.setValue({
        title: '',
        description: '',
        date: '',
        duration: '',
        authors: []
      });

      const result = comp.isFormValid();
  
      expect(result).toBeFalsy();
    });
  });