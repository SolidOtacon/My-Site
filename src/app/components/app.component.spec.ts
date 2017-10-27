import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { element } from 'protractor';
import { AppComponent } from './app.component';
import { routes } from './../../../testing-utils/stubs/router/router-stubs';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SimpleComponent } from '../../../testing-utils/mock-components/simple/simple.component';
import { TestModule } from '../../../testing-utils/modules/test.module';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import * as fromApp from '../ngrx/app.reducers';
import * as LayoutAction from '../ngrx/layout/layout.actions';
import { StoreModule, Store } from '@ngrx/store';

describe('AppComponent', () => {
  const testTitleName = 'nkdsnalknkl';
  let store: Store<fromApp.AppState>;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let wrapper: TestWrapperComponent;
  let app: AppComponent;

  beforeEach( async() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule,
        StoreModule.forRoot(fromApp.reducers),
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        TestWrapperComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(TestWrapperComponent);
    wrapper = fixture.componentInstance;
    store = TestBed.get(Store);
    app = fixture.debugElement.children[0].nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(wrapper).toBeTruthy();
    expect(app).toBeTruthy();
  }));

  it('should set the title to random text', async(() => {
    store.dispatch(new LayoutAction.SetPageTitle(testTitleName));
    fixture.detectChanges();
    wrapper.pageTitle.subscribe((state: any) => {
      wrapper.testTitle = state.title;
      fixture.detectChanges();
    });
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(app.title).toBe(testTitleName);
    });
  }));

  it('should set mobile view to true', async(() => {
    wrapper.isMobileView = true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(app.isMobileView).toBe(true);
    });
  }));

  it('should set button list', async(() => {
    wrapper.mockButtonList[0].name = 'test';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(app.buttonList[0].name).toBe('test');
    });
  }));

});

@Component({
  selector: 'app-test-wrapper-component',
  template: `
    <AppComponent
      [buttonList]="mockButtonList"
      [isMobileView]="isMobileView"
      [title]="testTitle"
    >
    </AppComponent>
  `
})
class TestWrapperComponent implements OnInit {

  pageTitle: Observable<{ title: string }>;
  testTitle: string;
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

  isMobileView = true;

  constructor(private testStore: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.pageTitle = this.testStore.select('title');
  }

}
