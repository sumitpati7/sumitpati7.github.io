import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/projectClass';
import { ProjectService } from '../../Service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  service = inject(ProjectService);
  imported_array: Project[] = [];
  openProject = false;
  constructor(private routed: ActivatedRoute) {}
  ngOnInit() {
    this.imported_array = this.routed.snapshot.data['projects'];
    this.service.openDetails = false;
  }
}
