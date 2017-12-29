import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from '../../validators/customValidators';

@Component({
  selector: 'todo-add-form',
  templateUrl: './addForm.component.html',
  styleUrls: ['./addForm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
        title: ['', [Validators.required, Validators.maxLength(50)]],
        description: ['', Validators.maxLength(500)],
        date: ['', CustomValidators.date],
        duration: '',
        authors: ''
      })


    //subscribing to changes in form
    this.formGroup.valueChanges.subscribe((value: any) => console.log('###valueChanges###', value));
  }

  // ngOnChange() {
  //   this.formGroup.reset({
  //     todo: this.formBuilder.group({
  //       title: ['', [Validators.required, Validators.maxLength(50)]],
  //       description: ['', Validators.maxLength(500)],
  //       date: ['', CustomValidators.date],
  //       duration: '',
  //       authors: ''
  //     })
  //   })
  // }

  // submit(form: any): void {
  //   console.log(form.value.todo);
  // }
}
