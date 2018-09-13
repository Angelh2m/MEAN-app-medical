import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styles: []
})
export class QuestionsComponent implements OnInit {

  questionsList: object = [];
  currentMessage: any = {};
  question: FormGroup;
  @ViewChildren("questionBox") questionBox: QueryList<any>
  isClicked = [false, false];

  constructor(public _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.fetchUserQuestions();
    this.question = new FormGroup({
      subject: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
  }

  ngAfterViewInit() {
    // this.questionBox.changes.subscribe(c => {console.log(c._results) })
  }

  selectMessage(id) {
    this.currentMessage = this.questionsList[id];
    this.isClicked = [];
    this.isClicked[id] = !this.isClicked[id];
  }

  fetchUserQuestions() {
    this.questionsList = this._userService.usersPayload.questions;
    if (!this.questionsList) {
      this._userService.fetchUserProfile()
        .subscribe(
          (succ) => (this.questionsList = succ.questions),
          (err) => err.error ? this.router.navigate(['/']) : '')
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

  toogleResponse(e) {

  }

}
