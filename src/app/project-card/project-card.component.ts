import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() img:string = 'assets/img/logo_white.png';
  @Input() headline:string = 'skill headline';
  @Input() description:string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit tempora atque debitis, quas saepe facilis officiis ex! Consectetur saepe aperiam ipsum ab eos repellendus eum iste nemo quasi pariatur.';

  constructor() { }

  ngOnInit(): void {
  }

}
