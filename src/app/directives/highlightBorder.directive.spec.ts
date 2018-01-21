import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { HighlightBorder } from './highlightBorder.directive';

@Component({
  template: `<div [highlight]="date">`
})
class TestCourseBorderComponent {
  public date: string;
  public msInDay: number = 24 * 3600 * 1000;
}

describe('course border directive', () => {
  let component: TestCourseBorderComponent;
  let fixture: ComponentFixture<TestCourseBorderComponent>;
  let inputEl: DebugElement;

  let daysFromToday: number;
  let msFromToday: number;
  let courseDate: Date;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightBorder, TestCourseBorderComponent]
    });

    fixture = TestBed.createComponent(TestCourseBorderComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
  })

  it('should dye div border to green if course date is less then 14 days', () => {
    daysFromToday = 10;
    msFromToday = daysFromToday * component.msInDay;
    courseDate = new Date(Date.now() - msFromToday);
    component.date = courseDate.toString();

    fixture.detectChanges();

    expect(inputEl.nativeElement.style.borderColor).toBe('green');
  });

  it('should dye div border to blue if the course is upcoming', () => {
    daysFromToday = 10;
    msFromToday = daysFromToday * component.msInDay;
    courseDate = new Date(Date.now() + msFromToday);
    component.date = courseDate.toString();

    fixture.detectChanges();
    
    expect(inputEl.nativeElement.style.borderColor).toBe('blue');
  });

  it('should have default border color if course date is more then 14 days', () => {
    daysFromToday = 15;
    msFromToday = daysFromToday * component.msInDay;
    courseDate = new Date(Date.now() - msFromToday);
    component.date = courseDate.toString();

    fixture.detectChanges();

    expect(inputEl.nativeElement.style.borderColor).toBe('');
  });
})