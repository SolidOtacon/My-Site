import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ILink } from './../models/link.model';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  @Input() title: string;
  @Input() buttonList: Array<ILink>;
}
