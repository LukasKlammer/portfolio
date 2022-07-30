import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      img: 'assets/img/projects/el-pollo-loco.png',
      headline: 'El Pollo Loco',
      description: 'El Pollo Loco is a jump and run game programmed in JavaScript and with object-orientated programming.',
      url: 'https://el-pollo-loco.lukas-klammer.com/'
    },
    {
      img: 'assets/img/projects/pokedex.png',
      headline: 'Pokedex',
      description: 'This Web-App is based on JavaScript and uses RESTful API to show and search Pokémon. The user can get detailed information about every Pokémon and can save his favorites to local storage.',
      url: 'https://pokedex.lukas-klammer.com/'
    },
    {
      img: 'assets/img/projects/kanban.jpg',
      headline: 'Join',
      description: 'Do you know agile project management according to the SCRUM method? Our developer group has programmed a Kanban board for this purpose.',
      url: 'https://join.lukas-klammer.com/'
    },
    {
      img: 'assets/img/projects/portfolio.png',
      headline: 'Portfolio',
      description: 'The portfolio Website is based on the framework Angular and typescript. Here you can get to know me and my projects.',
      url: 'https://lukas-klammer.com'
    },
    {
      img: 'assets/img/projects/docbook.jpg',
      headline: 'DocBook',
      description: 'The DocBook Web-App is coded with Angular. Google Cloud Firestore is used as a NoSQL Database and the App is also hosted on Firebase.',
      url: 'https://docbook-280f2.web.app/doc-list'
    },
    {
      img: 'assets/img/projects/operation-management.png',
      headline: 'Fire Department Operation Management',
      description: 'This project is a real-life project that helps firefighters to manage many contemporaneous operations. It is in use in practice.',
      url: 'https://youtu.be/gZahN3QOWDs'
    },
  ];

  constructor() { }



}
