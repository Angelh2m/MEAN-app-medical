import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  formTitle: string;

  constructor() { }

  ngOnInit() {
  }

  onChangeState(state) {
    console.log(state);
    this.formTitle = state.replace();

  }

}
