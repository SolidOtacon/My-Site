import { ITile } from './../../models/tile.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() tiles: ITile;
  @Input() cols: number;
  @Input() rowHeight: string;
}
