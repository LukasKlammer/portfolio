import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {

  @Input() img:string = 'assets/img/logo_black.png';
  @Input() statement:string = 'Beispieltext - hier wird testimonial übergeben';
  @Input() name:string = 'Max Mustermann';
  @Input() role:string = 'position in the company';

  constructor() { }

  ngOnInit(): void {
  }

}
