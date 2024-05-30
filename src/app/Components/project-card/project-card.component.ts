import { Component, inject, Input } from '@angular/core';
import { ProjectService } from '../../Service/project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  service = inject(ProjectService);

  openDetails() {
    this.service.openDetails = true;
    console.log('Open Details Clicked!');
  }
}
