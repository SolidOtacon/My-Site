import { ILink } from './../../../app/models/link.model';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'app-component'
})
export class MockAppDirective {
  @Input() title: string;
  @Input() buttonList: Array<ILink>;
}
