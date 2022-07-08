import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  // images = ['assets/img/intro/coding_0.jpg'];
  images = ['assets/img/intro/coding_0.jpg', 'assets/img/intro/coding_1.jpg', 'assets/img/intro/coding_2.jpg'];
  headlines = ['love coding', 'Graduated at the university of Innsbruck', 'good work is team work'];
  currentImage = 0;
  showImage = true;

  constructor() {
    this.preload();
  }

  ngOnInit(): void {
    this.updateImage();
  }

  private updateImage() {
    setTimeout(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 1);
      this.updateImage();
    }, 6000);
  }

  private preload() {
    console.log('Preload wird ausgeführt.');
    for (let i = 0; i <= 2; i++) {
      let img = new Image();
      img.src = `assets/img/intro/coding_${i}.jpg`;
      console.log(img);
    }
  }

}
