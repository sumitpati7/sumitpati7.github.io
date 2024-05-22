import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsSubmitService {
  constructor(private http: HttpClient) {}

  pushContacts(data: { name: string; email: string; message: string }) {
    return this.http.post(
      'https://sumitpati7-83579-default-rtdb.firebaseio.com/contacts.json',
      data
    );
  }
}
