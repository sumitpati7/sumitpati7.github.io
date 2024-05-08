import { Component } from '@angular/core';
import { item_details } from './item_details';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  imported_array = item_details;
  ngOnInit() {
    this.imported_array.sort((a, b) => a.title.localeCompare(b.title));
  }
}
