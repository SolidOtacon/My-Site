import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.css']
})
export class SkillsContainerComponent implements OnInit, OnDestroy {

  tiles = [
    {text: 'Angular', cols: 1, rows: 1, img: '/assets/logos/angular.svg'},
    {text: 'TypeScript', cols: 1, rows: 1, img: '/assets/logos/typescript.svg'},
    {text: 'React', cols: 1, rows: 1, img: '/assets/logos/react.svg'},
    {text: 'C++', cols: 1, rows: 1, img: '/assets/logos/c++.svg'},
    {text: 'Java', cols: 1, rows: 1, img: '/assets/logos/java.svg'},
    {text: 'Webpack', cols: 1, rows: 1, img: '/assets/logos/webpack.svg'},
    {text: 'Babel', cols: 1, rows: 1, img: '/assets/logos/babel.svg'},
    {text: 'ngrx', cols: 1, rows: 1, img: '/assets/logos/ngrx.png'},
    {text: 'Redux', cols: 1, rows: 1, img: '/assets/logos/redux.svg'},
    {text: 'Node.js', cols: 1, rows: 1, img: '/assets/logos/Node.js.svg'},
    {text: 'PHP', cols: 1, rows: 1, img: '/assets/logos/PHP.svg'},
    {text: 'JWT', cols: 1, rows: 1, img: '/assets/logos/jwt.svg'},
    {text: 'NPM', cols: 1, rows: 1, img: '/assets/logos/Npm.svg'},
    {text: 'HTML5', cols: 1, rows: 1, img: '/assets/logos/HTML5.svg'},
    {text: 'CSS3', cols: 1, rows: 1, img: '/assets/logos/CSS3.svg'},
  ];

  mediaPoints = {
    xs: 'xs',
    sm: 'sm',
  };

  cols: number;
  rowHeight: string;
  watcher: Subscription;

  constructor(private media: ObservableMedia) {
    this.updateGrid();
  }

  ngOnInit() {
    this.updateGrid();
    this.watcher = this.media.subscribe(change => { this.updateGrid(); });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  private updateGrid(): void {
    this.cols = (this.media.isActive('xs') ||
    this.media.isActive('sm')) ? 3 : 5;

    this.rowHeight = '3:2';
  }

}