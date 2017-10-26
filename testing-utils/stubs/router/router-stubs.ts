import { SimpleComponent } from '../../mock-components/simple/simple.component';
import { Observable } from 'rxjs/Observable';
import { NavigationEnd, Routes } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Directive, Input } from '@angular/core';

export class MockRouterAbout {
  public ne = new NavigationEnd(0, 'http://localhost:3000/about', 'http://localhost:3000/about');
  public events = new Observable(obs => {
    obs.next(this.ne);
    obs.complete();
  });
}

export const routes: Routes = [
    { path: 'education', component: SimpleComponent },
    { path: 'contact', component: SimpleComponent },
    { path: 'work', component: SimpleComponent },
    { path: 'skills', component: SimpleComponent },
    { path: 'about', component: SimpleComponent },
    { path: '**', redirectTo: 'about', pathMatch: 'full' },
  ];

export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams };
  }
}

export class MockRouterEducation {
  public ne = new NavigationEnd(0, 'http://localhost:3000/education', 'http://localhost:3000/education');
  public events = new Observable(obs => {
    obs.next(this.ne);
    obs.complete();
  });
}

export class MockRouterSkills {
  public ne = new NavigationEnd(0, 'http://localhost:3000/skills', 'http://localhost:3000/skills');
  public events = new Observable(obs => {
    obs.next(this.ne);
    obs.complete();
  });
}

export class MockRouterWord {
  public ne = new NavigationEnd(0, 'http://localhost:3000/word', 'http://localhost:3000/work');
  public events = new Observable(obs => {
    obs.next(this.ne);
    obs.complete();
  });
}

export class MockRouterContact {
  public ne = new NavigationEnd(0, 'http://localhost:3000/contact', 'http://localhost:3000/contact');
  public events = new Observable(obs => {
    obs.next(this.ne);
    obs.complete();
  });
}

// @Directive({
//   selector: '[routerLink]',
//   host: {
//     '(click)': 'onClick()'
//   }
// })
// export class RouterLinkStubDirective {

//   @Input('routerLink') linkParams: any;
//   navigatedTo: any = null;

//   onClick() {
//     this.navigatedTo = this.linkParams;
//   }

// }
