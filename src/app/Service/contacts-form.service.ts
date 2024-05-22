import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsFormService {
  constructor(private http: HttpClient) {}

  pushContactInfo(data: { name: string; email: string; message: string }) {
    this.http
      .post(
        'https://sumitpati7-83579-default-rtdb.firebaseio.com/contacts.json',
        data
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
