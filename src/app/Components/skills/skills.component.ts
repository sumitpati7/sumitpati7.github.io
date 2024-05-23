import { Component, inject } from '@angular/core';
import { Item } from './itemClass';
import { ItemService } from '../../Service/item_details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  imported_array: Item[] = [];
  allItem: ItemService = inject(ItemService);
  constructor(private routed: ActivatedRoute) {}
  ngOnInit() {
    this.imported_array = this.routed.snapshot.data['items'];
    this.imported_array.sort((a, b) => a.title.localeCompare(b.title));
  }
}
