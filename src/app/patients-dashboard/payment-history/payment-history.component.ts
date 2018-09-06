import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styles: []
})
export class PaymentHistoryComponent implements OnInit {

  payments = []

  constructor(private _userService: UserService) { }

  ngOnInit() { this.onLoad(); }

  onLoad() {
    if (!this._userService.usersPayload.email) {
      this._userService.fetchUserProfile()
        .subscribe(
          (succ) => (this.payments = succ.payments),
          (err) => console.log(err)
        )
    } else {
      this.payments = this._userService.usersPayload.payments;
      console.log(this.payments);
    }

  }

}
