import { Component, OnInit } from '@angular/core';
import { WorkCard } from './../../models/work-card';

@Component({
  selector: 'app-work-container',
  templateUrl: './work-container.component.html',
  styleUrls: ['./work-container.component.css']
})
export class WorkContainerComponent implements OnInit {

  workCards: Array<WorkCard>;

  constructor() { }

  ngOnInit() {
    this.workCards = [
      {
        startDate: 'January 2017',
        endDate: 'Present',
        company: 'General Communication Inc.',
        title: 'Graduate Intern',
        description: `Rotational Assignments lasting 4 months each (1 year term).`,
        jobInception: [
          {
            title: 'Last Rotation: Data Analytics',
            description: `Responsible for generating reports in
            Tableau using big data cleaned in Alteryx workflows.`,
          },
          {
            title: 'Second Rotation: Digital Innovation Group',
            description: `Responsible for fleshing out an idea into a
            full website using React.js, and Webpack/Babel update for customer facing website.`,
            bullets: [
              'Updated Webpack to Webpack 3 significantly reducing loading times',
              'Code splitting using CommonsChunkPlugin and lazy loading optimizations',
              'Use of Leaflet and Material-UI to build an interactive map to show ticket data',
              'Familiarity with Docker, Neo4j, and micro-services architecture',
              'Use of Git and JIRA to track progress and peer review code'
            ]
          },
          {
            title: 'First Rotation: Network Integration Team',
            description: `Responsible for overhauling an already existing website with an Angular 2/4
            application, and adding a PHP backend to communicate with a MySQL database.`,
            bullets: [
              'Built using Material 2 components and material design best practices',
              'Built an authentication system using signed JSON Web Tokens',
              'Mobile version using Angular Flex-Layout',
              'Built using Angular CLI'
            ]
          }
        ],
      },
      {
        startDate: 'June 2016',
        endDate: 'Decemeber 2016',
        company: 'General Communication Inc.',
        title: 'Intern',
        description: `Gained a strong fundamental foundation in web development
        using Angular 2 to build reusable web components for web forms, and Node.js
        to communicate with CouchDB.`,
      }
    ];
  }

}
