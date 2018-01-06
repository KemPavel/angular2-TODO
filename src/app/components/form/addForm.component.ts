import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from '../../validators/customValidators';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'todo-add-form',
  templateUrl: './addForm.component.html',
  styleUrls: ['./addForm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddFormComponent implements OnInit {
  formGroup: FormGroup;
  authors: Array<string>;

  constructor(private formBuilder: FormBuilder, private changeDetectorRef: ChangeDetectorRef, private formService: FormService) {}

  ngOnInit() {
    this.formService.getAuthors();

    this.formService.formSubject.subscribe((authors) => {
      this.authors = authors;
      this.changeDetectorRef.markForCheck();
    })

    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(500), Validators.required]],
      date: [this.getCurrentDate(), Validators.required],
      duration: ['', Validators.required],
      authors: [[], Validators.required]
    });


    //subscribing to changes in form
    // this.formGroup.valueChanges.subscribe((value: any) => console.log('###valueChanges###', value));
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
}
