import { ITile } from './../../models/tile.model';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  @Input() tiles: ITile;
  @Input() cols: number;
  @Input() rowHeight: string;
}
