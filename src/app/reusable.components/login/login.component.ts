import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  formTitle: string;
  form: FormGroup;
  onSelectOption: boolean = false;

  constructor(public _loginService: LoginService) { }

  ngOnInit() { }

  onChangeState(state) {

    this.formTitle = state.replace();

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

  }

  onFormSumbit() {

    this.form.value.name = 'Angelh3m@gmail.com';
    this.form.value.password = '123';

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

  onSelectLogin() {
    this.onSelectOption = true;
  }
}
