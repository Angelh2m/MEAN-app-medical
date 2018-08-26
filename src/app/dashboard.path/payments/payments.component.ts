import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare function stripeInit();
declare global { interface Window { stripe: any; } }

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html'
})

export class PaymentsComponent implements OnInit {

  @ViewChild('someVar') el: ElementRef;

  constructor(private rd: Renderer2) { }

  ngOnInit() {
    stripeInit(); // GLOBAL FUNCTION INIT STRIPE
  }

  ngAfterViewInit() {
    console.log(this.rd);
    console.log(this.el);

  }

  onSubmit() {
    console.log('Sumitting');
    this.el.nativeElement[4].click()

  }
}
