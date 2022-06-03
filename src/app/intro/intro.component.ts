import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  images = ['coding.jpg', 'uni_innsbruck.jpg', 'team.jpg'];
  headlines = ['love coding','Graduated at the university of Innsbruck',  'good work is team work'];
  currentImage = 0;
  showImage = true;

  constructor() { }

  ngOnInit(): void {
  }

}
