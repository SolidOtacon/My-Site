import { WorkCard } from './../../models/work-card';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent {
  @Input() workCards: Array<WorkCard>;
}
