import { Component, OnInit, Inject, } from '@angular/core';
import { Faq } from '../interfaces/faq';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DOCUMENT } from '@angular/platform-browser';
import { LoginService } from '../services/login/login.service';
import { User } from '../models/user.models';
// import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})

export class LandingComponent implements OnInit {

  form: FormGroup;

  constructor(public _loginService: LoginService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

  }


  getLogin() {
    // console.log('Submit');

    this.form.value.name = 'Angelh3m@gmail.com';
    this.form.value.password = '123';
    // console.log(this.form.value);

    let user = new User(
      this.form.value.email,
      this.form.value.password
    )

    this._loginService.loginUser(user)
      .subscribe(
        res => console.log('FROM OBSV ', res),
        err => console.log(err)
      )


  }


  onToggle(event) {
    let isActive = event.path[1].className.split(' ').indexOf('faq--is-active') > 0;
    isActive == false ? event.path[1].classList.add("faq--is-active") : null;
    isActive == true ? event.path[1].classList.remove("faq--is-active") : null;
  }

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

}



