import { Directive, ElementRef, Input } from '@angular/core';


@Directive ({
  selector: '[highlight]'
})

export class HighlightBorder {
  @Input('highlight') date: string;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const currentDate: number = Date.now();
    const createdDate: number = Date.parse(this.date);
    if (createdDate < currentDate && createdDate >= currentDate - (14 * 24 * 60 * 60 * 1000)) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (createdDate > currentDate) {
      this.el.nativeElement.style.borderColor = 'blue';
    }
  }
}
