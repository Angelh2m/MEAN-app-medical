import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styles: []
})
export class QuestionsComponent implements OnInit {

  questionsList: object = [];
  question: FormGroup;

  constructor(public _userService: UserService) { }

  ngOnInit() {
    this.fetchUserQuestions();
    this.question = new FormGroup({
      subject: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });

  }

  fetchUserQuestions() {
    this.questionsList = this._userService.usersPayload.questions;
    if (!this.questionsList) {
      this._userService.fetchUserProfile()
        .subscribe(
          (succ) => (this.questionsList = succ.questions),
          (err) => console.log(err)
        )
    }
  }

  askQuestion() {
    this._userService.askQuestion(this.question.value)
      .subscribe(
        (succ) => (console.log(succ),
          (err) => console.log(err)
        )
      )
  }

}
