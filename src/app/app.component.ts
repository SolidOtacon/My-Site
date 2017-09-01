import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

export interface ILink {
  name: string;
  link: string;
  active: boolean;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  buttonList: Array<ILink>;
  currentActiveButton: string;

  constructor(
    private router: Router,
  ) {
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
        name: 'Work',
        link: '/work',
        active: false,
        icon: 'work'
      },
      {
        name: 'Contact',
        link: '/contact',
        active: false,
        icon: 'chat'
      }
    ];
    this.currentActiveButton = '';
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setIsActive(val.url);
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
      } else {
        button.active = false;
      }
    }
  }
}
