import { WorkCard } from './../../models/work-card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  // TODO: Test data, replace with @input
  workCards: Array<WorkCard>;

  constructor() { }

  ngOnInit() {
    this.workCards = [
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
      {
        startDate: 'May',
        endDate: 'September',
        title: 'Graduate Intern',
        description: `TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST `
      },
    ];
  }

}
