import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/authorization.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'todo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  private loginFormGroup: FormGroup;
  @Output() login: EventEmitter<any> = new EventEmitter();

  constructor(
    private authorizationService: AuthorizationService,
    private spinnerService: SpinnerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit(formData: any): void {
    this.spinnerService.show();
    const { login, password } = formData.value;
    this.authorizationService.login(login, password)
      .subscribe((data: any) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userName', login);
        this.router.navigateByUrl('courses');
        this.spinnerService.hide();
      });
    this.login.emit();
    console.log(`YOU HAVE SUCESSFULLY LOGGED IN WITH NAME: ${login} AND PASSWORD: ${password}`);
  }

  isFormValid() {
    return this.loginFormGroup.status === 'VALID';
  }

  closeLoginForm(): void {
    this.authorizationService.hideLoginForm();
  }
}
