import { Component, inject, Input } from '@angular/core';
import { ProjectService } from '../../Service/project.service';
import { Project } from '../../models/projectClass';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() import!: Project;

  service = inject(ProjectService);

  ngOnInit() {
    console.log(this.import);
  }

  openDetails() {
    this.service.selectedTask = this.import;
    this.service.openDetails = true;
  }
}
