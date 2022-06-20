import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobile:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:resize", []) updateDays() {
    if (window.innerWidth >= 700) {
      this.isMobile = false;
    } else if (window.innerWidth < 700) {
      this.isMobile = true;
    }
  }
}
