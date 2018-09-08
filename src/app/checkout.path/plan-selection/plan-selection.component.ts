import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentsService } from '../../services/payments/payments.service';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html'
})
export class PlanSelectionComponent implements OnInit {
  home: boolean = true;
  membership: any = {
    price: '0',
    selected: false,
    number: null
  }

  constructor(
    public router: Router,
    public _paymentsService: PaymentsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.home = this.activatedRoute.snapshot.data.title !== 'payments/cards';
    this.membership = this._paymentsService.membership;
  }

  setPayload(option) {
    this.membership = this._paymentsService.setPayment(option);
  }

  onProceed() {
    this.router.navigate(['/payments/card']);
  }

  ngOnDestroy() {
    this.home = this.activatedRoute.snapshot.data.title !== 'payments/cards';
  }

}
