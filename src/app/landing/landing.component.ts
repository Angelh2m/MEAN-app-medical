import { Component, OnInit, Inject, } from '@angular/core';
import { Faq } from '../interfaces/faq';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})


// interface Faq extends Array<MyObject> { };

export class LandingComponent implements OnInit {

  questions: Faq[] = [
    {
      question: 'Where are you located?',
      response: 'We are located in Mexico'
    },
    {
      question: 'Does the final price contains taxes?',
      response: 'Correct final price taxes included'
    },
    {
      question: 'Does the final price contains taxes?',
      response: 'Correct final price taxes included'
    }
  ];



  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {


  }

  ngAfterViewInit() {
    console.log(
      this._document.getElementById('questions'));
  }

  onToggle(event) {
    let isActive = event.path[1].className.split(' ').indexOf('faq--is-active') > 0;
    isActive == false ? event.path[1].classList.add("faq--is-active") : null;
    isActive == true ? event.path[1].classList.remove("faq--is-active") : null;

    // event.path[1].classList.add("faq--is-active")'
    console.log(event.path[1].className.split(' ').indexOf('faq--is-active') > 1);

    console.log(event.path[1].className.split(' '));
    console.log(isActive);

  }

}



