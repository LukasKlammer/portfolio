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
      headline: 'Product Design',
      description: 'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'
    },
    {
      img: 'assets/img/skillset/filler.png',
      headline: 'Visual Design',
      description: 'My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.'
    },
    {
      img: 'assets/img/skillset/motion.png',
      headline: 'Motion Design',
      description: 'I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling.'
    },
    {
      img: 'assets/img/skillset/camera.png',
      headline: 'Photography',
      description: 'Clicking pictures really bring out the creative in me. Photography really makes you look and percieve thins in a different way.'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
