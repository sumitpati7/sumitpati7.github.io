import { Component, inject } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { ItemService } from './Service/item_details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sumitpati7';
  router = inject(Router);
  showLoader: Boolean = false;
  item_details = inject(ItemService);

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.showLoader = false;
      }
    });
  }

  errorMessage() {
    var string;
    if (this.item_details.errorMessage.status === 0) {
      string = 'Connection to the database is interrupted';
    } else {
      string = this.item_details.errorMessage.error.error;
    }
    return string;
  }
}
