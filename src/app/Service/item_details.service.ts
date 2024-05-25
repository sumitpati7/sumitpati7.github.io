import { Injectable } from '@angular/core';
import { Item } from '../Components/skills/itemClass';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  displayMessage: boolean = false;
  errorMessage: any;
  constructor(private http: HttpClient, private routes: Router) {}

  getallCourses() {
    return this.http
      .get<{ [key: string]: Item }>(
        'https://sumitpati7-83579-default-rtdb.firebaseio.com/courses.json'
      )
      .pipe(
        map((response) => {
          let users = [];
          for (let key in response) {
            if (response.hasOwnProperty(key))
              users.push({ ...response[key], id: key });
          }
          return users;
        }),
        catchError((err) => {
          this.errorMessage = err;
          setTimeout(() => {
            this.errorMessage = null;
          }, 5000);
          return throwError(() => err);
        })
      );
  }
}
