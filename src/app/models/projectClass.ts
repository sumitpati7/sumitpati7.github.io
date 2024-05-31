import { inject } from '@angular/core';
import { ItemService } from '../Service/item_details.service';
import { ProjectService } from '../Service/project.service';

export class Project {
  constructor(
    public title: string,
    public img_url: string[],
    public desc: string,
    public id?: string
  ) {}
}

export const resolve = () => {
  let projectService = inject(ProjectService);
  return projectService.getallProjects();
};
