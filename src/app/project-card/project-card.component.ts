import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() project =     {
    img: 'assets/img/projects/el-pollo-loco.png',
    headline: 'El Pollo Loco',
    description: 'El Pollo Loco is a jump and run game programmed in JavaScript and with object-orientated programming.',
    url: 'https://www.google.com'
  };


  isHovered = false;

  constructor() { }

  public hoverEffectOn() {
    this.isHovered = true;
  }

  public hoverEffectOff() {
    this.isHovered = false;
  }

  public openProject() {
    window.open(this.project.url, '_blank');
  }

}
