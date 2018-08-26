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
    // console.log(this.router.location._platformStrategy._platformLocation.pathname);
    console.log(this.activatedRoute.snapshot.data.title);

    this.home = this.activatedRoute.snapshot.data.title !== 'payments';
    console.log(this.home);
  }

}
