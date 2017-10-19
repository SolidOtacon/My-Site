import { MockRouterAbout, RouterLinkStubDirective } from './../../testing-utils/stubs/router/router-stubs';
import { TestModule } from './../../testing-utils/modules/test.module';
import { SharedModule } from './../shared/shared.module';
import { AppContainerComponent } from './app-container.component';
import { AppComponent } from '../components/app.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetMedia } from './../ngrx/media/media.actions';
import { ILink } from './../models/link.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../ngrx/app.reducers';
import * as LayoutAction from '../ngrx/layout/layout.actions';
import * as MediaAction from '../ngrx/media/media.actions';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

describe('AppContainerComponent', () => {
  let fixture;
  let comp;
  let linkDes;
  let links;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule
      ],
      declarations: [
        AppContainerComponent,
        AppComponent,
        RouterLinkStubDirective
      ],
      providers: [
        { provide: Router, useClass: MockRouterAbout }
      ]
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppContainerComponent);
      comp = fixture.componentInstance;
    });

    beforeEach(() => {
      fixture.detectChanges();
      linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
      links = linkDes.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
