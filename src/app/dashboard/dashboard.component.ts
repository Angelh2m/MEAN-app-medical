import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/shared/header.service';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(
    public _sidebar: HeaderService,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {

    const metaTag: MetaDefinition = {
      name: 'description of the dashboard',
      content: 'My Dashboard',
    }

    this.meta.updateTag(metaTag);

    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild == null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
      .subscribe(event => {
        console.log(event);
        this.title.setTitle(event.name);
      })

  }

  ngOnInit() {
    console.log(this._sidebar);
  }

}
