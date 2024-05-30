import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { IconDirective } from './Directives/icon/icon.directive';
import { HomeComponent } from './Components/home/home.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { Routes, RouterModule, provideRouter } from '@angular/router';
import { routes } from './routes';
import { HeadersDirective } from './Directives/Headers/headers.directive';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { AddSkillComponent } from './Components/add-skill/add-skill.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './Components/project/project.component';
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import { ProjectInfoComponent } from './Components/project-info/project-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconDirective,
    HomeComponent,
    SkillsComponent,
    HeadersDirective,
    ContactsComponent,
    AddSkillComponent,
    ProjectComponent,
    ProjectCardComponent,
    ProjectInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
