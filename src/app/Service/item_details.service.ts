import { Injectable } from '@angular/core';
import { Item } from '../Components/skills/itemClass';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

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
        })
      );
  }
}
