import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  flag = false;
  notFunc() {
    console.log(this.flag);
    this.flag = !this.flag;
  }
}
