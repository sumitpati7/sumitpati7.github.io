import { Routes } from '@angular/router';
import { SkillsComponent } from './Components/skills/skills.component';
import { HomeComponent } from './Components/home/home.component';
export const routes: Routes = [
  // { path: 'Home', component: Components.HomeComponent },
  { path: '', title: 'sumitpati7', component: HomeComponent },
  { path: 'Skills', title: 'Skills', component: SkillsComponent },
];
