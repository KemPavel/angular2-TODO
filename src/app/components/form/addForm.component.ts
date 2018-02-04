import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from '../../validators/customValidators';
import { FormService } from '../../services/form.service';
import { TodoListService } from '../../services/todoList.service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'

@Component({
  selector: 'todo-add-form',
  templateUrl: './addForm.component.html',
  styleUrls: ['./addForm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddFormComponent implements OnInit {
  formGroup: FormGroup;
  authors: Array<string>;
  sub: any;
  todoSub: any;
  id: number;
  authors$: any;

  constructor(
    private formBuilder: FormBuilder, 
    private changeDetectorRef: ChangeDetectorRef, 
    private formService: FormService,
    private activatedRoute: ActivatedRoute,
    private todoListService: TodoListService,
    private spinnerService: SpinnerService,
    private router: Router,
    private store: Store<any>
  ) {
    this.authors$ = this.store.select('form');
    this.authors$.subscribe(
      (res) => {
        this.authors = res;
        this.spinnerService.hide();
        this.changeDetectorRef.markForCheck();
    });
  }

  ngOnInit() {
    this.spinnerService.show();
    this.formService.getAuthors();

    this.sub = this.activatedRoute.params.subscribe(params => {

      if (params.id) {
        this.id = params.id;
        this.todoListService.getTodoById(params.id);
      }
    });

    this.todoSub = this.todoListService.todosSubject.subscribe( data => {
      if(this.formGroup) {
        this.formGroup.setValue({
          title: data.title,
          description: data.description,
          date: data.date,
          duration: data.duration,
          authors: this.checkSelectedAuthors(data.authors)
        });
      }
      this.spinnerService.hide();
      this.changeDetectorRef.markForCheck();
    });

    // this.formService.formSubject.subscribe((authors) => {
    //   this.authors = authors;
    //   this.spinnerService.hide();
    //   this.changeDetectorRef.markForCheck();
    // });

    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(500), Validators.required]],
      date: [this.getCurrentDate(), Validators.required],
      duration: ['', Validators.required],
      authors: [[], Validators.required]
    });
  }

  onSubmit(formData: any): any {
    console.log(formData.value);
    const updatedTodo = formData.value;
    updatedTodo.id = this.id || Math.round(Math.random() * 10) + 100;
    this.todoListService.updateTodo(updatedTodo);
    this.todoSub.unsubscribe();
    this.router.navigateByUrl('courses');
  }

  checkSelectedAuthors(authors: Array<string>) {
    if (authors && authors.length) {
      var selectedAuthors: any = [];
      this.authors.map( (formAuthor: string) => {
        authors.map( (resAuthor: string) => {
          if(formAuthor === resAuthor) {
            selectedAuthors.push(formAuthor);
          }
        });
      });
      return selectedAuthors;
    }
  }

  isFormValid(): boolean {
    return this.formGroup.status === 'VALID';
  }

  getCurrentDate(): string {
    let today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if(dd < 10) dd = '0' + dd;

    if(mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.todoSub.unsubscribe();
  }
}
