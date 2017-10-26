import { StoreModule, Store } from '@ngrx/store';
import { State } from './../ngrx/layout/layout.reducers';
import { Observable } from 'rxjs/Observable';
import { SimpleComponent } from '../../../testing-utils/mock-components/simple/simple.component';
import { TestModule } from '../../../testing-utils/modules/test.module';
import { AppContainerComponent } from './app-container.component';
import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, Routes, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import * as fromApp from '../ngrx/app.reducers';
import * as LayoutAction from '../ngrx/layout/layout.actions';


describe('AppContainerComponent', () => {

  const routes: Routes = [
    { path: 'education', component: SimpleComponent },
    { path: 'contact', component: SimpleComponent },
    { path: 'work', component: SimpleComponent },
    { path: 'skills', component: SimpleComponent },
    { path: 'about', component: SimpleComponent },
    { path: '**', redirectTo: 'about', pathMatch: 'full' },
  ];
  let fixture: ComponentFixture<AppContainerComponent>;
  let app: any;
  let router: Router;
  let location: Location;
  let store: Store<fromApp.AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule,
        StoreModule.forRoot(fromApp.reducers),
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppContainerComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    store = TestBed.get(Store);

    fixture = TestBed.createComponent(AppContainerComponent);
    fixture.autoDetectChanges();
    app = fixture.componentInstance;
    router.initialNavigation();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should have a defined store', async(() => {
    expect(store).toBeDefined();
  }));

  it('should set the title to About', async(() => {
    store.dispatch(new LayoutAction.SetPageTitle('About'));
    let testTitle: string;
    app.pageTitle.subscribe((state: State) => testTitle = state.title);
    expect(testTitle).toBe('About');
  }));

  it('should redirect to /about', async(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/about');
    });
  }));

  it('should route to /contact', async(() => {
    router.navigate(['contact']).then(() => {
      expect(location.path()).toBe('/contact');
    });
  }));

  it('should route to /education', async(() => {
    router.navigate(['education']).then(() => {
      expect(location.path()).toBe('/education');
    });
  }));

  it('should route to /about', async(() => {
    router.navigate(['about']).then(() => {
      expect(location.path()).toBe('/about');
    });
  }));

  it('should route to /skills', async(() => {
    router.navigate(['skills']).then(() => {
      expect(location.path()).toBe('/skills');
    });
  }));

  it('should route to /work', async(() => {
    router.navigate(['work']).then(() => {
      expect(location.path()).toBe('/work');
    });
  }));

  it('should set about button to be active, and all others to false', async(() => {
    router.events.subscribe((val) => {
      app.setActiveButton(val);
    });
    router.navigate(['about']).then(() => {
      expect(app.buttonList[0].active).toBe(true);
      expect(app.buttonList[1].active).toBe(false);
      expect(app.buttonList[2].active).toBe(false);
      expect(app.buttonList[3].active).toBe(false);
      expect(app.buttonList[4].active).toBe(false);
    });
  }));

  it('should set about button to be active, and all others to false with random input', async(() => {
    router.events.subscribe((val) => {
      app.setActiveButton(val);
    });
    router.navigate(['bjkjnklmklhbhjjk']).then(() => {
      expect(app.buttonList[0].active).toBe(true);
      expect(app.buttonList[1].active).toBe(false);
      expect(app.buttonList[2].active).toBe(false);
      expect(app.buttonList[3].active).toBe(false);
      expect(app.buttonList[4].active).toBe(false);
    });
  }));

  it('should set education button to be active, and all others to false', async(() => {
    router.events.subscribe((val) => {
      app.setActiveButton(val);
    });
    router.navigate(['education']).then(() => {
      expect(app.buttonList[0].active).toBe(false);
      expect(app.buttonList[1].active).toBe(true);
      expect(app.buttonList[2].active).toBe(false);
      expect(app.buttonList[3].active).toBe(false);
      expect(app.buttonList[4].active).toBe(false);
    });
  }));

  it('should set work button to be active, and all others to false', async(() => {
    router.events.subscribe((val) => {
      app.setActiveButton(val);
    });
    router.navigate(['work']).then(() => {
      expect(app.buttonList[0].active).toBe(false);
      expect(app.buttonList[1].active).toBe(false);
      expect(app.buttonList[2].active).toBe(true);
      expect(app.buttonList[3].active).toBe(false);
      expect(app.buttonList[4].active).toBe(false);
    });
  }));

  it('should set skills button to be active, and all others to false', async(() => {
    router.events.subscribe((val) => {
      app.setActiveButton(val);
    });
    router.navigate(['skills']).then(() => {
      expect(app.buttonList[0].active).toBe(false);
      expect(app.buttonList[1].active).toBe(false);
      expect(app.buttonList[2].active).toBe(false);
      expect(app.buttonList[3].active).toBe(true);
      expect(app.buttonList[4].active).toBe(false);
    });
  }));

  it('should set contact button to be active, and all others to false', async(() => {
    router.events.subscribe((val) => {
      app.setActiveButton(val);
    });
    router.navigate(['contact']).then(() => {
      expect(app.buttonList[0].active).toBe(false);
      expect(app.buttonList[1].active).toBe(false);
      expect(app.buttonList[2].active).toBe(false);
      expect(app.buttonList[3].active).toBe(false);
      expect(app.buttonList[4].active).toBe(true);
    });
  }));

});
