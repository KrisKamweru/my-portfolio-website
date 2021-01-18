import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { faChevronCircleDown as circleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  circleDownIcon = circleDown;

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.typeMe');

    const options = {
      typeColor: 'black',
      loop: true,
      typeSpeed: "random",
      // animateCursor: "none".toString(),
      typeSpeedMin: 65,
      typeSpeedMax: 115,
    };

    const writer = new Typewriter(target, options);
    writer
    .type('Kristofer Kamweru')
    .rest(10000)
    .start();
  }

}
