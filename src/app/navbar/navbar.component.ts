import { Component } from '@angular/core';
import { faGripLinesVertical as vertiLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMobileExpanded: boolean = false;

  gripLine = vertiLine;

  hamburgerClick() {
    this.isMobileExpanded = !this.isMobileExpanded;
  }
}
