import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { ProjectService } from '../../Service/project.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css',
})
export class ProjectInfoComponent {
  service = inject(ProjectService);
  constructor(private elementRef: ElementRef<HTMLElement>) {}
  closeInfo() {
    const element = document.getElementById('box');
    element?.setAttribute('class', 'box disappear');
    setTimeout(() => {
      this.service.openDetails = false;
    }, 400);
  }
}
