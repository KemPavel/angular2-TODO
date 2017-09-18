import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Logo } from './components/logo/logo';
import { Toolbox } from './components/toolbox/toolbox';
import { Course } from './components/courses/course/course';
import { Footer } from './components/footer/footer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    Logo,
    Toolbox,
    Course,
    Footer
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
