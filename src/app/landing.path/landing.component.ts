import { Component, OnInit } from '@angular/core';
import { Faq } from '../utils/interfaces/faq';
import { FaqData } from '../utils/data/data.faq';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})

export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  /* *
  *  Toggle FAQ
  */
  onToggle(event) {
    let isActive = event.path[1].className.split(' ').indexOf('faq--is-active') > 0;
    isActive == false ? event.path[1].classList.add("faq--is-active") : null;
    isActive == true ? event.path[1].classList.remove("faq--is-active") : null;
  }

  questions: Faq[] = FaqData;
}



