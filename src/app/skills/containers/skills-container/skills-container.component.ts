import { IListItem } from './../../models/list-item.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class SkillsContainerComponent implements OnInit, OnDestroy {

  openSource: Array<IListItem>;
  languages: Array<IListItem>;
  databases: Array<IListItem>;
  other: Array<IListItem>;

  mediaPoints = {
    xs: 'xs',
    sm: 'sm',
  };

  cols: number;
  rowHeight: string;
  activeMedia: Subscription;

  constructor(
    private media: ObservableMedia,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.openSource = [
      {text: 'Angular', git: 'https://github.com/angular'},
      {text: 'TypeScript', git: 'https://github.com/Microsoft/TypeScript'},
      {text: 'React', git: 'https://github.com/facebook/react'},
      {text: 'Webpack', git: 'https://github.com/webpack'},
      {text: 'Babel', git: 'https://github.com/babel/babel'},
      {text: 'ngrx', git: 'https://github.com/ngrx/platform'},
      {text: 'Node.js', git: 'https://github.com/nodejs/node'},
      {text: 'NPM', git: 'https://github.com/npm/npm'}
    ];
    this.languages = [
      {text: 'C++'},
      {text: 'Java'},
      {text: 'PHP'},
    ];
    this.databases = [
      {text: 'MySQL'},
      {text: 'CouchDB'},
      {text: 'Neo4j'},
    ];
    this.other = [
      {text: 'JWT'}
    ];
    this.activeMedia = this.store.select('media').subscribe(media => this.updateGrid(media));
  }

  ngOnDestroy() {
    this.activeMedia.unsubscribe();
  }

  private updateGrid(media): void {
    this.cols = (this.mediaPoints.hasOwnProperty(media.activeMedia)) ? 3 : 5;

    this.rowHeight = '3:2';
  }

}
