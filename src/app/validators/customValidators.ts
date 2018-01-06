import { FormControl } from '@angular/forms';

export class CustomValidators {
  static date(control: FormControl) {
      const DATE_REGEXP = /\d{2}\/\d{2}\/\d{4}$/;
      return DATE_REGEXP.test(control.value) ? null : {'invalidDate': true};
  }
}
