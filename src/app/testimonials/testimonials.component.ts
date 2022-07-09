import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials = [
    {
      img: 'assets/img/testimonials/digital_learning.jpg',
      statement: '"Lukas is a very skilled and hard working teacher, his main skills are to be found in digital learning and teaching. He was an important force in building up a progressive and well working system of digital learning in the secondary-school “Dr. Josef Röd” in Bruneck, Italy."',
      name: 'Stefan Keim',
      role: 'Headmaster'
    },
    {
      img: 'assets/img/testimonials/network.jpg',
      statement: '"Lukas has a high degree of initiative and a willingness to do more than what is necessary. This simplifies cooperation and leads to the speedy and successful completion of various projects."',
      name: 'Lukas Pfendt',
      role: 'IT systems administrator'
    },
    {
      img: 'assets/img/testimonials/team.jpg',
      statement: '"All I can say is that Lukas remains determined, thoughtful and focused on his work, always looking for meaning in what he does."',
      name: 'Claudia Rieder',
      role: 'Head of BYOD department'
    },
  ];


  constructor() { }

}
