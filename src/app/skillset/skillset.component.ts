import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent implements OnInit {

  skills = [
    {
      img: 'assets/img/skillset/vector.png',
      headline: 'JavaScript',
      description: 'My steady interest in working with computers brought me to the Developer Akademie in Munich / Germany. Here I learned the basics of developing software with JavaScript and TypeScript.'
    },
    {
      img: 'assets/img/skillset/filler.png',
      headline: 'Angular',
      description: 'In 2022 I started to learn Angular to build business applications with many different components to simple work of people.'
    },
    {
      img: 'assets/img/skillset/motion.png',
      headline: 'HTML / CSS',
      description: 'I startet my first HTML / CSS experience years ago as am member of the informatics workgroup in a volunteer organisation.'
    },
    {
      img: 'assets/img/skillset/camera.png',
      headline: 'SCRUM',
      description: 'Working as a key user and first level supporter in my school district has taught me a lot how to plan the work efficient and how to improve the organisation day for day.'
    },
    {
      img: 'assets/img/skillset/camera.png',
      headline: 'Git',
      description: 'My coaches at Developer Akademie explained us the benefits and opportunities from using version control software. We used in many group projects GitHub with the local installed software Git.'
    },
    {
      img: 'assets/img/skillset/camera.png',
      headline: 'Design Thinking',
      description: 'As a frontend software developer we build software that people will interact with. The design is very importend to raise user experience and the pleasure to be used. I learned to build attractive and smart web-apps.'
    },
    {
      img: 'assets/img/skillset/camera.png',
      headline: 'REST-API',
      description: 'In my projects I developed a weather service app, where users can search for the weather-data at a specific place. The weather-data I got from a REST-API.'
    },
    {
      img: 'assets/img/skillset/camera.png',
      headline: 'Test automation',
      description: 'I learnet the basics oft Angular test automation to check the status of my app.'
    },
    {
      img: 'assets/img/skillset/camera.png',
      headline: 'Databases',
      description: 'In my projects I used Firebase Cloud Firestore to save and load data. '
    },
    {
      img: 'assets/img/skillset/camera.png',
      headline: 'Social Competence',
      description: 'My studies and my experience at school has helped me learn how to work with different people and colleagues. I am good at giving constructive feedback, public speaching, time management, organization and leadership.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
