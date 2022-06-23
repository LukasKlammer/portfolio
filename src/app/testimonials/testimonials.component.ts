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
      statement: '"Lukas is a very skilled and hard working teacher, his main skills are to be found in digital learning and teaching. He was an important force in building up a progressive and well working system of digital learning in the secondary-school “Dr. Josef Röd” in Bruneck, Italy."',
      name: 'Stefan Keim',
      role: 'headmaster'
    },
    {
      img: 'assets/img/team.jpg',
      statement: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam velit, architecto aliquid, blanditiis voluptatem ipsa unde corrupti natus enim quia quibusdam dignissimos quo. Beatae veniam, pariatur perferendis deserunt accusamus distinctio?"',
      name: 'Stefan Keim',
      role: ''
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
