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
  nameError: boolean = false;
  emailRequired: boolean = false;
  emailPattern: boolean = false;
  messageError: boolean = false;
  errorMessage: string = '';
  error: boolean = false;
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
      link: 'https://maps.app.goo.gl/uukcfVEgLK9iVByR7',
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
    if (this.form.valid) {
      this.pushService.pushContacts(this.form.value).subscribe({
        next: (response) => {
          this.isSubmit = true;
          setTimeout(() => {
            this.form.reset();
            this.isSubmit = false;
          }, 3000);
        },
        error: (err) => {
          this.errorMessage = err.error.error;
          this.error = true;
          setTimeout(() => {
            this.form.reset();
            this.error = false;
            this.isSubmit = false;
          }, 3000);
        },
      });
    }
  }
}
