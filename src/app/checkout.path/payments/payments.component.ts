import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare function stripeInit();
declare global { interface Window { stripe: any; } }

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html'
})

export class PaymentsComponent implements OnInit {

  @ViewChild('refForm') el: ElementRef;
  home: boolean = true;
  constructor(
    private rd: Renderer2,
    public router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    stripeInit(); // GLOBAL FUNCTION INIT STRIPE
    this.home = this.activatedRoute.snapshot.data.title !== 'payments/cards';
    console.warn('TRigger this ', this.home);
  }

  ngAfterViewInit() {
    console.log(this.rd);
    console.log(this.el);

  }

  onSubmit() {
    console.log('Sumitting');
    console.log(this.el.nativeElement[5]);

    this.el.nativeElement[5].click()

  }
}
