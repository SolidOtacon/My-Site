import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { IMedia } from './../models/media.model';
import { Component, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ILink } from './../models/link.model';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  @ViewChild('nav') nav: MatSidenav;
  @Input() title: string;
  @Input() buttonList: Array<ILink>;
  @Input() isMobileView: boolean;

  onLinkClick(): void {
    if (this.isMobileView) {
      this.nav.close();
    }
  }
}
