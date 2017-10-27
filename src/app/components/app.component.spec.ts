import { AppComponent } from './app.component';
import { routes } from './../../../testing-utils/stubs/router/router-stubs';
import { StoreModule, Store } from '@ngrx/store';
import { State } from './../ngrx/layout/layout.reducers';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SimpleComponent } from '../../../testing-utils/mock-components/simple/simple.component';
import { TestModule } from '../../../testing-utils/modules/test.module';
import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, Routes, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import * as fromApp from '../ngrx/app.reducers';
import * as LayoutAction from '../ngrx/layout/layout.actions';

describe('AppComponent', () => {
  let fixture: ComponentFixture<TestWrapperComponent>;
  let app: AppComponent;
  let wrapper: TestWrapperComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        TestWrapperComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(TestWrapperComponent);
    app = fixture.debugElement.children[0].componentInstance;
    wrapper = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create the component', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should create the component with title set to hi', async(() => {
    wrapper.titleSource.next('hi');
    wrapper.titleSource.subscribe((value) => {
      expect(app.title).toBe('hi');
    });
  }));
});

@Component({
  selector: 'app-test-wrapper-component',
  template: `
    <AppComponent
      [buttonList]="mockButtonList"
      [title]="titleSource"
      [isMobileView]="isMobileView"
    >
    </AppComponent>
  `
})
class TestWrapperComponent {
  mockButtonList = [
    {
      name: 'About',
      link: '/about',
      active: false,
      icon: 'person'
    },
    {
      name: 'Education',
      link: '/education',
      active: false,
      icon: 'school'
    },
    {
      name: 'Work Experience',
      link: '/work',
      active: false,
      icon: 'work'
    },
    {
      name: 'Skills',
      link: '/skills',
      active: false,
      icon: 'star_rate'
    },
    {
      name: 'Contact',
      link: '/contact',
      active: false,
      icon: 'chat'
    },
  ];
  // titleSource = Observable.create(observer => {
  //   observer.onNext('test');
  //   observer.onCompleted();
  // });

  titleSource = new Subject();

  isMobileView = false;

  pushTitleString(title: string) {
    this.titleSource.next(title);
  }
}
