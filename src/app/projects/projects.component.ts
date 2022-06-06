import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      img: 'assets/img/projects/restaurant.png',
      headline: 'Restaurant Website',
      description: 'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
    },
    {
      img: 'assets/img/projects/dashboard.png',
      headline: 'Mobile Dashboard',
      description: 'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
    },
    {
      img: 'assets/img/projects/coinview.png',
      headline: 'CoinView Mobile App Design',
      description: 'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
    },
    {
      img: 'assets/img/projects/tbox.png',
      headline: 'T-Box Mobile Design',
      description: 'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
