import { Component } from '@angular/core';
import { Routes } from '@angular/router';

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
