import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials = [
    {
      img: 'assets/img/digital_learning.jpg',
      statement: '"Lukas is a very skilled and hard working teacher, his main skills are to be found in digital learning and teaching. He was an important force in building up a progressive and well working system of digital learning in the secondary-school “Dr. Josef Röd” in Bruneck, Italy."',
      name: 'Stefan Keim',
      role: 'Headmaster'
    },
    {
      img: 'assets/img/team.jpg',
      statement: '"Lukas has a high degree of initiative and a willingness to do more than what is necessary. This simplifies cooperation and leads to the speedy and successful completion of various projects."',
      name: 'Lukas Pfendt',
      role: 'IT systems administrator'
    },
    {
      img: 'assets/img/focus_work.jpg',
      statement: '"All I can say that, Lukas works works purposefully, deliberately and with focus, always looking for meaning in what he does."',
      name: 'Claudia Rieder',
      role: 'Head of BYOD department'
    },
  ];


  constructor() { }

}
