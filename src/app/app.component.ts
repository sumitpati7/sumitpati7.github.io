import { Component, inject } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sumitpati7';
  router = inject(Router);
  showLoader: Boolean = false;

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      }
      if (event instanceof NavigationEnd) {
        this.showLoader = false;
      }
    });
  }
}
