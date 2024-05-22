import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsSubmitService } from '../../Service/contacts-submit.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  isSubmit: boolean = false;
  form!: FormGroup;
  pushService = inject(ContactsSubmitService);
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
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });
  }

  submit() {
    this.isSubmit = true;
    this.pushService.pushContacts(this.form.value).subscribe((response) => {
      setTimeout(() => {
        this.isSubmit = false;
      }, 3000);
    });
  }
}
