import { Routes } from '@angular/router';
import { SkillsComponent } from './Components/skills/skills.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { resolve } from './Components/skills/itemClass';
import { AddSkillComponent } from './Components/add-skill/add-skill.component';
export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', title: 'sumitpati7', component: HomeComponent },
  {
    path: 'Skills',
    title: 'Skills',
    component: SkillsComponent,
    resolve: { items: resolve },
  },
  { path: 'Contacts', title: 'Contact Me', component: ContactsComponent },
  {
    path: 'addskill',
    title: 'AddSkill',
    loadChildren: () =>
      import('./Components/add-skill/add-skill.module').then((c) => {
        return c.AddSkillModule;
      }),
    // component: AddSkillComponent,
  },
];
