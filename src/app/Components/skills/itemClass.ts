import { inject } from '@angular/core';
import { ItemService } from '../../Service/item_details.service';

export class Item {
  constructor(
    public title: string,
    public img_url: string,
    public desc: string,
    public id?: string
  ) {}
}

export const resolve = () => {
  let itemService = inject(ItemService);
  return itemService.getallCourses();
};
