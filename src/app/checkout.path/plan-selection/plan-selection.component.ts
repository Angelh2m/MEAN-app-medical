import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html'
})
export class PlanSelectionComponent implements OnInit {
  home: boolean = true;

  constructor(public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.data.title !== 'payments/cards';
    console.warn(this.home);

  }
  ngOnDestroy() {
    this.home = this.activatedRoute.snapshot.data.title !== 'payments/cards';
  }

}
