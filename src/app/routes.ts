import { Routes } from '@angular/router';
import { SkillsComponent } from './Components/skills/skills.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', title: 'sumitpati7', component: HomeComponent },
  { path: 'Skills', title: 'Skills', component: SkillsComponent },
  { path: 'Contacts', title: 'Contact Me', component: ContactsComponent },
];
