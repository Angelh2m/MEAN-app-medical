import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from '@angular/forms';

// type ArrObj = Object[];
type ArrObj = any[] | any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})

export class DashboardComponent implements OnInit {

  user: ArrObj = {
    info: [
      {
        firstName: 'Robert', lastName: 'Doe', phoneNumber: '(442) 232 1111',
        address: '75 Hawthorne St', email: 'user@gmail.com',
        city: 'Dallas', state: 'Texas',
      }
    ],
    medical: [
      { complete: false },
      {
        questions: [
          { 'Do you smoke?': true },
          { 'Do you excersise': true }
        ]
      }
    ],
    payments: [
      { membership: '3 moth plan', ammoun: '$155', purchased: 'July,10,2018', expires: 'Sep,10,2018' }
    ],
    questions: [
      {
        title: 'Question title', question: 'The question???', questionDate: 'June 13 2018',
        answer: 'The Answer', answerDate: '', responded: false,
      }
    ],
    appointments: [
      { sugery: 'Surgery Name', doctor: "Doctor's Name", specialty: 'Ortophedic', office: 'Location', date: 'DateScheduled' }
    ]

  }

  percentage: Number = 0;
  isEdit = false;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.progress();
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
    });

    this.form.setValue({
      firstName: this.user.info[0].firstName,
      lastName: this.user.info[0].lastName,
      phoneNumber: this.user.info[0].phoneNumber,
      address: this.user.info[0].address,
      email: this.user.info[0].email,
      city: this.user.info[0].city,
      state: this.user.info[0].state,
    })
  }

  progress() {
    let filled = 0;
    let requiredFields = 0;

    Object.keys(this.user.info[0]).map((el, i) => {
      requiredFields += 1;
      if (this.user.info[0][el].length >= 1) {
        filled += 1;
      }
    })

    this.percentage = Math.floor((filled / requiredFields) * 100);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  onSaveData() {
    console.log(this.form.value);
    this.user.info[0] = {
      ...this.form.value
    }

    this.progress();
  }

}
