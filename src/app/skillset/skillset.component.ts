import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {

  skills = [
    {
      img: 'assets/img/skillset/javascript.png',
      headline: 'JavaScript',
      description: 'My steady interest in working with computers brought me to the Developer Akademie in Munich / Germany. Here I learned the basics of developing software with JavaScript and TypeScript.'
    },
    {
      img: 'assets/img/skillset/angular.png',
      headline: 'Angular',
      description: 'In 2022 I started to learn Angular to build business applications with many components to simple work of people.'
    },
    {
      img: 'assets/img/skillset/html.png',
      headline: 'HTML / CSS',
      description: 'I started my first HTML / CSS experience years ago as am member of the informatics workgroup in a volunteer organization .'
    },
    {
      img: 'assets/img/skillset/scrum.png',
      headline: 'SCRUM',
      description: 'Working as a key user and first level supporter in my school district has taught me a lot how to plan the work efficient and how to improve the organization day for day.'
    },
    {
      img: 'assets/img/skillset/git.png',
      headline: 'Git',
      description: 'Our group and individual projects showed us the benefits and opportunities from using version control software. We used in many group projects GitHub with the local installed software Git.'
    },
    {
      img: 'assets/img/skillset/design_thinking.png',
      headline: 'Design Thinking',
      description: 'As a frontend software developer we build software that people will interact with. The design is important to raise user experience and the pleasure to be used. I learned to build attractive and smart web-apps.'
    },
    {
      img: 'assets/img/skillset/api.png',
      headline: 'REST-API',
      description: 'In my projects I developed a weather service app, where users can search for the weather-data at a specific place. The weather-data I got from a REST-API.'
    },
    {
      img: 'assets/img/skillset/test_automation.png',
      headline: 'Test automation',
      description: 'I used Angular test automation to check the status of my app.'
    },
    {
      img: 'assets/img/skillset/database.png',
      headline: 'Databases',
      description: 'In my projects I utilized Firebase Cloud Firestore to save and load data.'
    },
    {
      img: 'assets/img/skillset/social_competence.png',
      headline: 'Social Competence',
      description: 'My studies and my experience at school has helped me learn how to work with different people and colleagues and to improve my organization skills.'
    },
  ];

  constructor() { }


}
