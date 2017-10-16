import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
