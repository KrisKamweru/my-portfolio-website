import { Component } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent {
  images = [
    "../../assets/Construction-Yellow-Background.svg",
    "../../assets/Construction-Engineers.svg"
  ]

  cssStyle: number;

  get Image() {
    let randomInt = this.randInt(20);
    if (randomInt % 2 === 0) {
      // return "../../assets/Construction-Yellow-Background.svg";
      return "./assets/Construction-Engineers.svg";
    }
    else {
      return "./assets/Construction-Engineers.svg";
    }
  }

  randInt(max: number) {
    //get a random integer between 0 and max
    let num = Math.floor(Math.random() * Math.floor(max));

    //determine the css style for the document based on the integer generated
    if (num % 2 === 0){
      this.cssStyle = 2;
    }
    else {
      this.cssStyle = 1;
    }

    //return the random integer
    return num;

  }
}