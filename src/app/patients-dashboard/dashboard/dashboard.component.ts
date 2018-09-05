import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { UserObj } from '../../utils/interfaces/user';

// type ArrObj = Object[];
type ArrObj = any[] | any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})

export class DashboardComponent implements OnInit {

  usersPayload = this._userService.usersPayload;


  percentage: Number = 0;
  isEdit = false;
  form: FormGroup;

  constructor(private _userService: UserService) {
    this.onComponentLoad();
  }

  toggleEdit() { this.isEdit = !this.isEdit; }

  ngOnInit() { this.progress(); }

  onComponentLoad() {
    // FETCH FOR THE USER and GET THE DATA
    this._userService.fetchUserProfile().subscribe(
      (res: any) => {
        if (res.info) {
          this.usersPayload = {
            ...res
          }
        }
        console.warn("FORM COMPONENT");
      }, (err) => console.log(err.user)
    );

    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
    });

  }


  test() {
    this._userService.getUserDataTest();
  }

  progress() {
    let filled = 0;
    let requiredFields = 0;

    // Object.keys(this.user.info[0]).map((el, i) => {
    //   requiredFields += 1;
    //   if (this.user.info[0][el].length >= 1) {
    //     filled += 1;
    //   }
    // })

    this.percentage = Math.floor((filled / requiredFields) * 100);
  }

  onLogout() {
    this._userService.onLogout();
  }


  onSaveData() {

    this.usersPayload = {
      // Route differently if the email is different
      // Grab all from the current form
      info: {
        ...this.form.value,
      },
    }

    console.warn("CHETK DATa", this.usersPayload);


    this._userService.updateUserData(this.usersPayload.info)
      .subscribe(
        (res: any) => {
          this.usersPayload = {
            info: {
              ...res.user.info
            }
          }
          this.progress();
        }, (err) => console.log(err)
      );

  }

}
