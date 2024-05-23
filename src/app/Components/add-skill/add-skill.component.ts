import { Component, inject } from '@angular/core';
import { PushSkillService } from '../../Service/push-skill.service';
import { Item } from '../skills/itemClass';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrl: './add-skill.component.css',
})
export class AddSkillComponent {}
