import { SetMedia } from './../ngrx/media/media.actions';
import { ILink } from './../models/link.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../ngrx/app.reducers';
import * as LayoutAction from '../ngrx/layout/layout.actions';
import * as MediaAction from '../ngrx/media/media.actions';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit, OnDestroy {
  pageTitle: Observable<{ title: string }>;
  isMobileView: boolean;

  buttonList: Array<ILink>;
  currentActiveButton: string;

  watcher: Subscription;
  routerSub: Subscription;

  constructor(
    private media: ObservableMedia,
    private router: Router,
    private store: Store<fromApp.AppState>,
  ) {}

  ngOnInit() {
    this.isMobileView = (this.media.isActive('xs') || this.media.isActive('sm') || this.media.isActive('md'));
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.store.dispatch(new MediaAction.SetMedia(change.mqAlias));
      this.isMobileView = (change.mqAlias === 'xs' || change.mqAlias === 'sm' || change.mqAlias === 'md');
    });
    this.buttonList = [
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
    this.currentActiveButton = '';
    this.pageTitle = this.store.select('title');

    this.routerSub = this.router.events.subscribe((val) => {
      this.setActiveButton(val);
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
    this.routerSub.unsubscribe();
  }

  setActiveButton(val: any) {
    const setIsActive = (url) => {
      for (const button of this.buttonList) {
        if (this.currentActiveButton === button.name) {
          button.active = false;
        }

        if (button.link === url) {
          button.active = true;
          this.currentActiveButton = button.name;
          this.store.dispatch(new LayoutAction.SetPageTitle(button.name));
        } else {
          button.active = false;
        }
      }
    };

    if (val instanceof NavigationEnd) {
      if (val.urlAfterRedirects !== '/') {
        setIsActive(val.urlAfterRedirects);
      } else {
        setIsActive('/about');
      }
    }
  }
}
