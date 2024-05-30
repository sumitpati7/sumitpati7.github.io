import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { resolve } from '../../models/projectClass';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    resolve: { projects: resolve },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
