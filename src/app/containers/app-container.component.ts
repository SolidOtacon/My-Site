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

@Component({
  selector: 'app-root',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit, OnDestroy {
  // TODO: Implement 2 drawers one for mobile and one for desktop activate based off of media query.
  pageTitle: Observable<{ title: string }>;

  transitioning: boolean;

  buttonList: Array<ILink>;
  currentActiveButton: string;
  drawerOpened: boolean;
  drawerMode: string;
  drawerToggleMedia = {
    xs: 'xs',
    sm: 'sm',
    md: 'md'
  };

  watcher: Subscription;

  constructor(
    private media: ObservableMedia,
    private router: Router,
    private store: Store<fromApp.AppState>,
    private title: Title
  ) {}

  ngOnInit() {
    this.transitioning = false;
    this.setInitalDrawerState();
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.store.dispatch(new MediaAction.SetMedia(change.mqAlias));
      if (this.drawerToggleMedia.hasOwnProperty(change.mqAlias)) {
        console.log('changing to mobile');
        this.drawerOpened = false;
        this.drawerMode = 'over';
      } else {
        console.log('changing to desktop');
        if (!this.transitioning) {
          this.transitioning = true;
          setTimeout(() => {
            this.drawerOpened = true;
            this.drawerMode = 'side';
            this.transitioning = false;
          }, 250);
        }
      }
    });
    this.buttonList = [
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
    this.currentActiveButton = '';
    this.pageTitle = this.store.select('title');

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url !== '/') {
          this.setIsActive(val.url);
        } else {
          this.setIsActive('/about');
        }
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  setInitalDrawerState() {
    if (
      this.media.isActive(this.drawerToggleMedia.xs)
      || this.media.isActive(this.drawerToggleMedia.sm)
      || this.media.isActive(this.drawerToggleMedia.md)
    ) {
      this.drawerOpened = false;
      this.drawerMode = 'over';
    } else {
      this.drawerOpened = true;
      this.drawerMode = 'side';
    }
  }

  setIsActive(val: string) {
    for (const button of this.buttonList) {
      if (this.currentActiveButton === button.name) {
        button.active = false;
      }

      if (button.link === val) {
        button.active = true;
        this.currentActiveButton = button.name;
        this.store.dispatch(new LayoutAction.SetPageTitle(button.name));
      } else {
        button.active = false;
      }
    }
  }
}
