import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  isSubmit: boolean = false;
  constructor(private router: Router) {}
  contacts = [
    {
      logo: 'fa-solid fa-envelope',
      link: 'mailto:sumitpati7@gmail.com',
      name: 'sumitpati7@gmail.com',
    },
    {
      logo: 'fa-solid fa-phone',
      link: 'tel:9843803325',
      name: '+977-9843012345',
    },
    {
      logo: 'fa-solid fa-location-dot',
      icon: 'https://maps.google.com',
      name: 'Bhaktapur, Nepal',
    },
  ];
  ngOnInit() {
    this.isSubmit = false;
  }

  submit(name: string, email: string, mess: string) {
    if (name === '' || name === null) {
      alert('Name not submitted!');
      return;
    }
    if (email === '' || email === null) {
      alert('Email not submitted!');
      return;
    }
    this.isSubmit = true;
    const box = document.getElementById('forms');
    if (box != null) {
      box.style.height = '200px';
    }

    const main = document.getElementById('main');
    if (main != null) {
      main.style.height = '93dvh';
      main.style.display = 'flex';
      main.style.alignItems = 'center';
    }
    console.log({ name });
  }
}
