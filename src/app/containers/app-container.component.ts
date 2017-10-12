import { ILink } from './../models/link.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../ngrx/app.reducers';
import * as LayoutAction from '../ngrx/layout/layout.actions';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {
  pageTitle: Observable<{ title: string }>;
  buttonList: Array<ILink>;
  currentActiveButton: string;
  drawerOpened = true;
  drawerMode = 'side';
  drawerToggleMedia = {
    xs: 'xs',
    sm: 'sm',
    md: 'md'
  };

  watcher: Subscription;
  activeMediaQuery = '';

  constructor(
    media: ObservableMedia,
    private router: Router,
    private store: Store<fromApp.AppState>,
    private title: Title
  ) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change.mqAlias;
      if (this.drawerToggleMedia.hasOwnProperty(change.mqAlias)) {
        this.drawerOpened = false;
        this.drawerMode = 'over';
      } else {
        this.drawerOpened = true;
        this.drawerMode = 'side';
      }
    });
    title.setTitle('Trent Matthias');
  }

  ngOnInit() {
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
        name: 'Contact Information',
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
