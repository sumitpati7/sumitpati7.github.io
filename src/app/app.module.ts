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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './Components/projects/projects.component';

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
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
