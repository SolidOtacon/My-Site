import { Subscription } from 'rxjs/Subscription';
import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { IMedia } from './../models/media.model';
import { Component, Input, ChangeDetectionStrategy, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ILink } from './../models/link.model';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('nav') nav: MatSidenav;
  @Input() title: string;
  @Input() buttonList: Array<ILink>;
  @Input() isMobileView: boolean;
  watcher: Subscription;

  constructor(
    private media: ObservableMedia
  ) {}

  ngOnInit() {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      if (!(change.mqAlias === 'xs' || change.mqAlias === 'sm' || change.mqAlias === 'md') && !this.nav.opened) {
        this.nav._animationState = 'open-instant';
        this.nav.open();
      }
    });
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }

  onLinkClick(): void {
    if (this.isMobileView) {
      this.nav.close();
    }
  }
}
