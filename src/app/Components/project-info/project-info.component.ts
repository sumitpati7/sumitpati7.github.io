import { Component, Input, inject } from '@angular/core';
import { ProjectService } from '../../Service/project.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css',
})
export class ProjectInfoComponent {
  service = inject(ProjectService);

  closeInfo() {
    this.service.openDetails = false;
  }
}
