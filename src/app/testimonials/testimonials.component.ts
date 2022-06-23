import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    {
      img: 'assets/img/team.jpg',
      statement: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam velit, architecto aliquid, blanditiis voluptatem ipsa unde corrupti natus enim quia quibusdam dignissimos quo. Beatae veniam, pariatur perferendis deserunt accusamus distinctio?"',
      name: 'Stefan Keim',
      role: 'school leader'
    },
    {
      img: 'assets/img/team.jpg',
      statement: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam velit, architecto aliquid, blanditiis voluptatem ipsa unde corrupti natus enim quia quibusdam dignissimos quo. Beatae veniam, pariatur perferendis deserunt accusamus distinctio?"',
      name: 'Stefan Keim',
      role: 'school leader'
    },
    {
      img: 'assets/img/team.jpg',
      statement: '"Lukas has a high degree of initiative and a willingness to do more than what is necessary. This simplifies cooperation and leads to the speedy and successful completion of various projects."',
      name: 'Lukas Pfendt',
      role: 'IT systems administrator'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
