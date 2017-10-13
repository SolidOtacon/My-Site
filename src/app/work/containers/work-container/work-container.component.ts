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
        description: [
          `Rotational Assignments lasting 4 months each (1 year term).`
        ],
        jobInception: [
          {
            title: 'Last Rotation: Data Analytics',
            description: [
              `Created reports in Tableau using big data cleaned in Alteryx workflows.
              Created Splunk dashboards to monitor critical servers and keep track of errors.`
            ],
          },
          {
            title: 'Second Rotation: Digital Innovation Group',
            description: [
              `Created a full website in React to display ticket data by region on a map; idea came from an old hackathon.
              Used Mapbox tiles and Leaflet for React to build and manipulate the map. Worked with the design team to follow
              specifications and build beautiful layouts for every component.
              Followed Material Design specifications and used the Material-UI NPM library.
              Responsive design using Flexbox CSS to support mobile devices and different displays.
              Application built using the flux design pattern with multiple stores.`,
              `Revamped the Webpack and Babel configuration for the main customer facing website, significantly reducing
              the loading times. Split code using CommonsChunkPlugin and added the webpack dev server to facilitate a
              better development environment. Cross browser compatibility improvements using auto prefix from PostCSS and Webpack
              loaders. Integrated Karma and Jasmine into new Webpack configuration by rebuilding configuration file for Karma
              from scratch.`,
              `Team used an Agile/Lean methodology with heavy use of code reviews.
              Created high quality components for customer facing site.`,
            ],
          },
          {
            title: 'First Rotation: Network Integration Team',
            description: [
              `Overhauled a website from scratch using Angular 2/4 and created a PHP backend API to manipulate a
              MySQL database. Created a custom stateless authentication system using signed JSON Web Tokens.`,
              `Followed Material Design guidelines and used Material 2 NPM package.
              Responsive layout through the use of Angular/Flex-Layout.
              State management through the use of RXJS and Subjects to communicate across components through services.`,
              `Implemented end to end testing using protractor. Application built using Angular CLI.`
            ],
          }
        ],
      },
      {
        startDate: 'June 2016',
        endDate: 'Decemeber 2016',
        company: 'General Communication Inc.',
        title: 'Intern',
        description: [
          `Gained a strong fundamental foundation in web development
          using Angular 2 to build reusable web components for web forms.
          Use of Node.js to manipulate SQL data to fit in CouchDB.
          Created reusable components for web forms using Semantic UI, and
          participated in code reviews.`,
          `Maintained SharePoint manual for application and designed it for web blog style pages from word documents.`
        ],
      }
    ];
  }

}
