import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../Components/skills/itemClass';

@Injectable({
  providedIn: 'root',
})
export class PushSkillService {
  constructor(private http: HttpClient) {}

  pushSkill(data: Item) {
    return this.http.post(
      'https://sumitpati7-83579-default-rtdb.firebaseio.com/courses.json',
      data
    );
  }
}
