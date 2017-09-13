import { ILink } from './../models/link.model';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../ngrx/app.reducers';
import * as LayoutAction from '../ngrx/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {
  pageTitle: Observable<{ title: string }>;
  buttonList: Array<ILink>;
  currentActiveButton: string;

  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.buttonList = [
      {
        name: 'About',
        link: '/about',
        active: true,
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
        icon: 'chat'
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
