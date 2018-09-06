import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentsService } from '../../services/payments/payments.service';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html'
})
export class PlanSelectionComponent implements OnInit {
  home: boolean = true;

  constructor(
    public router: Router,
    public _paymentsService: PaymentsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.data.title !== 'payments/cards';
    console.warn(this.home);
  }

  setPayload() {
    this._paymentsService.setPayment();
    // console.log('Set Payment!!! ');
  }
  ngOnDestroy() {
    this.home = this.activatedRoute.snapshot.data.title !== 'payments/cards';
  }

}
