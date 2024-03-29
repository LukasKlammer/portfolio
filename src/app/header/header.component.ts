import { Component } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public navigation: NavigationService) { }

}
