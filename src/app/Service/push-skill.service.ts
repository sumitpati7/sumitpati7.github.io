import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/itemClass';

@Injectable({
  providedIn: 'root',
})
export class PushSkillService {
  constructor(private http: HttpClient) {}

  pushSkill(data: Item) {
    let headers = { Name: 'Sumit' };
    return this.http.post(
      'https://sumitpati7-83579-default-rtdb.firebaseio.com/courses.json',
      data,
      { headers: headers }
    );
  }
}
