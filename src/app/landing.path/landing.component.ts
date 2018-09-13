import { Component, OnInit } from '@angular/core';
import { Faq } from '../utils/interfaces/faq';
import { FaqData } from '../utils/data/data.faq';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})

export class LandingComponent implements OnInit {

  x: number = 0;
  surgeries = [
    'Low back pain surgery', 'Gastric bypass',
    'Knee replacements ', 'hip replacement ', ' joint replacement',
    'femoral shaft fracture',
  ]
  surgeries2 = [
    'Arthroplasty', 'Shoulder arthroscopy ',
    'Lumbar spinal fusion', 'Low back intervertebral disc surgery',
    'Reconstructive surgery',
  ]


  constructor() { }

  ngOnInit() {

    // setInterval(() => {
    //   this.surgeries.push('new');
    // }, 1000)


    // this.run();
    // setInterval(() => {
    //   console.log('HWEWEW');
    //   this.x += 1;
    //   console.log(this.x);

    //   if (this.x == 30) {

    //     this.x = 0;
    //   }
    // }, 200);

  }


  // run() {
  //   requestAnimationFrame(() => {
  //     // this.run();
  //   });
  // }

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
