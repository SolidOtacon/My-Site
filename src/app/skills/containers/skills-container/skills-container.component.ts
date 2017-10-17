import { IListItem } from './../../models/list-item.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../ngrx/app.reducers';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.css'],
})
export class SkillsContainerComponent implements OnInit {

  openSource: Array<IListItem>;
  languages: Array<IListItem>;
  databases: Array<IListItem>;
  other: Array<IListItem>;

  constructor() {}

  ngOnInit() {
    this.openSource = [
      {text: 'Angular', git: 'https://github.com/angular/angular'},
      {text: 'TypeScript', git: 'https://github.com/Microsoft/TypeScript'},
      {text: 'Angular CLI', git: 'https://github.com/angular/angular-cli'},
      {text: 'React', git: 'https://github.com/facebook/react'},
      {text: 'Webpack', git: 'https://github.com/webpack/webpack'},
      {text: 'Webpack Dev Server', git: 'https://github.com/webpack/webpack-dev-server'},
      {text: 'Babel', git: 'https://github.com/babel/babel'},
      {text: 'Material 2', git: 'https://github.com/angular/material2'},
      {text: 'Angular Flex-Layout', git: 'https://github.com/angular/flex-layout'},
      {text: 'ngrx', git: 'https://github.com/ngrx/platform'},
      {text: 'Node.js', git: 'https://github.com/nodejs/node'},
      {text: 'NPM', git: 'https://github.com/npm/npm'}
    ];
    this.languages = [
      {text: 'C++'},
      {text: 'Java'},
      {text: 'PHP'},
      {text: 'ES6'},
    ];
    this.databases = [
      {text: 'MySQL'},
      {text: 'CouchDB'},
      {text: 'Neo4j'},
    ];
    this.other = [
      {text: 'JSON Web Tokens'},
      {text: 'Material Design'},
      {text: 'Responsive Design'},
      {text: 'Android Development'}
    ];
  }
}
