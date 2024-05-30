import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/projectClass';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  openDetails: boolean = false;
  private errorMessage!: string | null;
  constructor(private http: HttpClient) {}

  getallProjects() {
    return this.http
      .get<{ [key: string]: Project }>(
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
