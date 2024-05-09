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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconDirective,
    HomeComponent,
    SkillsComponent,
    HeadersDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
