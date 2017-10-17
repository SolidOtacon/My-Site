import { IListItem } from './../../models/list-item.model';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  @Input() openSource: IListItem;
  @Input() languages: IListItem;
  @Input() databases: IListItem;
  @Input() other: IListItem;
  @Input() cols: number;
  @Input() rowHeight: string;
}
