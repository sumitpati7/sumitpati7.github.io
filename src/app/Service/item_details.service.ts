import { Injectable } from '@angular/core';
import { Item } from '../Components/skills/itemClass';
import { Observable, catchError, map } from 'rxjs';
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
        catchError(
          (
            err: HttpErrorResponse,
            caught: Observable<
              { id: string; title: string; img_url: string; desc: string }[]
            >
          ) => {
            console.log(err.error.error);
            this.errorMessage = err.error.error;
            this.displayMessage = true;
            setTimeout(() => {
              this.routes.navigate(['/Home']);
              this.displayMessage = false;
            }, 3000);
            return caught;
          }
        )
      );
  }
}
