import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private routes: Router) {}
  flag = false;
  notFunc() {
    console.log(this.flag);
    this.flag = !this.flag;
  }
}
