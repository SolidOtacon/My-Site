import { Location } from '@angular/common';
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
  let appComponentFixture: ComponentFixture<AppComponent>;
  let wrapper: TestWrapperComponent;
  let app: AppComponent;
  let comp: AppComponent;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async() => {
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    wrapper = fixture.componentInstance;
    store = TestBed.get(Store);
    app = fixture.debugElement.children[0].nativeElement;

    appComponentFixture = TestBed.createComponent(AppComponent);
    comp = appComponentFixture.componentInstance;

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

  it('should have the title in html', async(() => {
    const tStore = TestBed.get(Store);
    tStore.dispatch(new LayoutAction.SetPageTitle(testTitleName));
    comp.title = tStore.select('title');
    appComponentFixture.whenStable().then(() => {
      comp.buttonList = wrapper.mockButtonList;
      comp.isMobileView = false;
      appComponentFixture.detectChanges();
      de = appComponentFixture.debugElement.query(By.css('#title'));
      el = de.nativeElement;
      expect(el.textContent).toBe(testTitleName);
    });
  }));

  it('should route to contact on link click', async(() => {
    const tStore = TestBed.get(Store);
    const location = TestBed.get(Location);
    tStore.dispatch(new LayoutAction.SetPageTitle(testTitleName));
    comp.title = tStore.select('title');
    appComponentFixture.whenStable().then(() => {
      comp.buttonList = wrapper.mockButtonList;
      comp.isMobileView = false;
      appComponentFixture.detectChanges();
      de = appComponentFixture.debugElement.query(By.css('#Contact'));
      el = de.nativeElement;
      el.click();
      appComponentFixture.detectChanges();
      appComponentFixture.whenStable().then(() => {
        expect(location.path()).toBe('/contact');
      });
    });
  }));

  it('should route to education on link click', async(() => {
    const tStore = TestBed.get(Store);
    const location = TestBed.get(Location);
    tStore.dispatch(new LayoutAction.SetPageTitle(testTitleName));
    comp.title = tStore.select('title');
    appComponentFixture.whenStable().then(() => {
      comp.buttonList = wrapper.mockButtonList;
      comp.isMobileView = false;
      appComponentFixture.detectChanges();
      de = appComponentFixture.debugElement.query(By.css('#Education'));
      el = de.nativeElement;
      el.click();
      appComponentFixture.detectChanges();
      appComponentFixture.whenStable().then(() => {
        expect(location.path()).toBe('/education');
      });
    });
  }));

  it('should route to work on link click', async(() => {
    const tStore = TestBed.get(Store);
    const location = TestBed.get(Location);
    tStore.dispatch(new LayoutAction.SetPageTitle(testTitleName));
    comp.title = tStore.select('title');
    appComponentFixture.whenStable().then(() => {
      comp.buttonList = wrapper.mockButtonList;
      comp.isMobileView = false;
      appComponentFixture.detectChanges();
      de = appComponentFixture.debugElement.query(By.css('#Work'));
      el = de.nativeElement;
      el.click();
      appComponentFixture.detectChanges();
      appComponentFixture.whenStable().then(() => {
        expect(location.path()).toBe('/work');
      });
    });
  }));

  it('should route to skills on link click', async(() => {
    const tStore = TestBed.get(Store);
    const location = TestBed.get(Location);
    tStore.dispatch(new LayoutAction.SetPageTitle(testTitleName));
    comp.title = tStore.select('title');
    appComponentFixture.whenStable().then(() => {
      comp.buttonList = wrapper.mockButtonList;
      comp.isMobileView = false;
      appComponentFixture.detectChanges();
      de = appComponentFixture.debugElement.query(By.css('#Skills'));
      el = de.nativeElement;
      el.click();
      appComponentFixture.detectChanges();
      appComponentFixture.whenStable().then(() => {
        expect(location.path()).toBe('/skills');
      });
    });
  }));

  it('should route to about on link click', async(() => {
    const tStore = TestBed.get(Store);
    const location = TestBed.get(Location);
    tStore.dispatch(new LayoutAction.SetPageTitle(testTitleName));
    comp.title = tStore.select('title');
    appComponentFixture.whenStable().then(() => {
      comp.buttonList = wrapper.mockButtonList;
      comp.isMobileView = false;
      appComponentFixture.detectChanges();
      de = appComponentFixture.debugElement.query(By.css('#Education'));
      el = de.nativeElement;
      el.click();
      appComponentFixture.detectChanges();
      appComponentFixture.whenStable().then(() => {
        expect(location.path()).toBe('/education');
        de = appComponentFixture.debugElement.query(By.css('#About'));
        el = de.nativeElement;
        el.click();
        appComponentFixture.detectChanges();
        appComponentFixture.whenStable().then(() => {
          expect(location.path()).toBe('/about');
        });
      });
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
        icon: 'person',
        id: 'About'
      },
      {
        name: 'Education',
        link: '/education',
        active: false,
        icon: 'school',
        id: 'Education'
      },
      {
        name: 'Work Experience',
        link: '/work',
        active: false,
        icon: 'work',
        id: 'Work'
      },
      {
        name: 'Skills',
        link: '/skills',
        active: false,
        icon: 'star_rate',
        id: 'Skills'
      },
      {
        name: 'Contact',
        link: '/contact',
        active: false,
        icon: 'chat',
        id: 'Contact'
      },
  ];

  isMobileView = true;

  constructor(private testStore: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.pageTitle = this.testStore.select('title');
  }

}
