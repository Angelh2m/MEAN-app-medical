import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './checkout.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(

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

  }

}
