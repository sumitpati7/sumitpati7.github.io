import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsFormService } from '../../Service/contacts-form.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  form: FormBuilder = inject(FormBuilder);
  pushInfo: ContactsFormService = inject(ContactsFormService);
  contactsForm!: FormGroup;
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
    this.contactsForm = this.form.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });
  }

  submit() {
    this.pushInfo.pushContactInfo(this.contactsForm.value);
    alert('Message has been submitted!');
    this.contactsForm.reset();
  }
}
