import { Component, OnInit } from '@angular/core';
// import { time } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-portfolio-website';

  
  ngOnInit() {
    // window.addEventListener('scroll', this.timeoutPoll);
    // window.addEventListener('scroll', this.stickyNavFunction)
  }

  timeoutPoll() {
    this.stickyNavFunction();
    // waits(100);
  }

  stickyNavFunction() {
    let navbar = document.getElementById("page-navbar");
    var sticky = navbar.offsetTop;

    console.log(window.pageYOffset, sticky);
    

    if (window.pageYOffset > (sticky)) {
      navbar.classList.add("is-fixed-top");
      // navbar.classList.remove("is-spaced");
    }
    else {
      navbar.classList.remove("is-fixed-top");
      // navbar.classList.add("is-spaced");
    }
  }
}
