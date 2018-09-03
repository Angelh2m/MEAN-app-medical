import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.models';
import { RegisterUserService } from '../../services/registerUser/register-user.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  formTitle: string;
  form: FormGroup;
  onSelectOption: boolean = false;

  fields = [
    { type: 'text', placeholder: 'Email', name: 'email' },
    { type: 'text', placeholder: 'Password', name: 'password' }
  ];

  payload: any = {
    name: '',
    email: '',
    password: '',
    password2: '',
  }

  constructor(
    public _loginService: LoginService,
    public _registerUserService: RegisterUserService,
    private _user: UserService
  ) { }

  ngOnInit() { }

  onChangeState(state) {
    this.formTitle = state.replace();
    switch (state) {
      case 'Sign-in':
        this.fields = [
          { type: 'text', placeholder: 'Email', name: 'email' },
          { type: 'text', placeholder: 'Password', name: 'password' },
        ];
        break;
      case 'Recover':
        this.fields = [
          { type: 'text', placeholder: 'Name', name: 'name' },
          { type: 'text', placeholder: 'Email', name: 'email' },
        ];
        break;
      case 'Create-an-account':
        this.fields = [
          { type: 'text', placeholder: 'Name', name: 'name' },
          { type: 'text', placeholder: 'Email', name: 'email' },
          { type: 'text', placeholder: 'Password', name: 'password' },
          { type: 'text', placeholder: 'Confirm Password', name: 'password2' }
        ];
        break;

      default:
        break;
    }


    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onType(e) {
    this.payload = {
      ...this.payload,
      [e.target.name]: e.target.value
    }
  }


  onFormSumbit() {
    let user: any;

    switch (this.formTitle) {
      case 'Sign-in':

        user = {
          email: this.payload.email,
          password: this.payload.password
        };
        this.onLoginUser(user)

        break;

      case 'Recover':

        break;

      case 'Create-an-account':

        user = {
          name: this.payload.name,
          email: this.payload.email,
          password: this.payload.password,
          password2: this.payload.password2
        };

        this.onRegisterUser(user);

        break;

      default:
        break;
    }
  }

  onLoginUser(user) {
    this._loginService.loginUser(user)
      .subscribe((res: any) => {

        this._user.setToken(res.token)
        console.warn(res.token);
      }),
      (err => console.log(err))
  }

  onRegisterUser(user) {
    this._registerUserService.registerUser(user)
      .subscribe((res: any) => {
        console.warn(res);
      }),
      (err => console.log(err))
  }

  onSelectLogin() {
    this.onSelectOption = true;
  }

}
