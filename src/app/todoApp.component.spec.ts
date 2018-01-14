import { TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoAppComponent } from './todoApp.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AuthorizationService } from './services/authorization.service';
import { TodoListService } from './services/todoList.service';
import { SpinnerService } from './services/spinner.service';
import { AuthorizedHttp } from './services/http.service';
import { FormService } from './services/form.service';
import { AuthGuardService } from './services/authGuard.service';



describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [
      TodoAppComponent, 
      HeaderComponent, 
      LogoComponent, 
      FooterComponent,
      SpinnerComponent
    ],
      imports: [ 
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        AuthorizationService,
        AuthorizedHttp,
        SpinnerService
      ]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(TodoAppComponent);
    expect(fixture.componentInstance instanceof TodoAppComponent).toBe(true, 'should create AppComponent');
  });
});
