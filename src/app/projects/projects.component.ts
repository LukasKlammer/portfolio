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
      description: 'El Pollo Loco is a jump and run game programmed in JavaScript and with object-orientated programming.'
    },
    {
      img: 'assets/img/projects/pokedex.png',
      headline: 'Pokedex',
      description: 'This Web-App is based on JavaScript and uses RESTful API to show and search pokemons. The user can get detaillate informations about every pokemon and can save his favourite pokemons to local storage.'
    },
    {
      img: 'assets/img/projects/join.png',
      headline: 'Join',
      description: 'Do you know agile project management according the SCRUM method? Our developer group has programmed its own Kanban board for this purpose.'
    },
    {
      img: 'assets/img/projects/portfolio.png',
      headline: 'Portfolio',
      description: 'The portfolio Website is based on the framework Angular and typescript. Here you can get to know me and my projects.'
    },
  ];

  constructor() { }



}
