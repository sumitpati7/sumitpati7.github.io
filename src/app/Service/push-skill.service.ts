import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../Components/skills/itemClass';

@Injectable({
  providedIn: 'root',
})
export class PushSkillService {
  constructor(private http: HttpClient) {}

  pushSkill() {}
}
