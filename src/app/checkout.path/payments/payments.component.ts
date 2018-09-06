import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';

declare function stripeInit();
declare global { interface Window { stripe: any; } }

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html'
})

export class PaymentsComponent implements OnInit {

  @ViewChild('getToken') el: ElementRef;
  home: boolean = true;
  isTimeEnabled = false;

  constructor(public router: Router,
    private _userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    stripeInit(); // GLOBAL FUNCTION INIT STRIPE
    this.home = this.activatedRoute.snapshot.data.title !== 'payments/cards';
  }

  ngAfterViewInit() { }

  onSubmit() {

    let timer;
    let token: string;

    if (!this.isTimeEnabled) {
      timer = setInterval(() => {
        console.log(this.el.nativeElement.innerText);
        if (this.el.nativeElement.innerText.length >= 8) {
          stopTimer(this.el.nativeElement.innerText)
        }
      }, 1000);
      this.isTimeEnabled = !this.isTimeEnabled;
    }

    const stopTimer = (token) => {

      clearInterval(timer)
      this._userService.makePayment(token)
        .subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        )
    }

  }
}
