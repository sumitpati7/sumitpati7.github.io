import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/projectClass';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  openDetails: boolean = false;
  private errorMessage!: string | null;
  selectedTask!: Project;

  project: Project = {
    title: 'CV website using Angular 17',
    img_url: [
      '../../../assets/image/Home.png',
      '../../../assets/image/Skills.png',
      '../../../assets/image/Contacts.png',
    ],
    desc: `Description: The Angular 17 CV Showcase is a dynamic and interactive website designed to showcase professional resumes in a modern and engaging way. Developed using Angular 17, a powerful front-end framework, this website offers seamless navigation, responsive
    design, and impressive performance. Key Features: Dynamic Content: The website allows users to create, customize, and display their CVs dynamically. Utilizing Angular's data binding capabilities, users can easily update their information, including
    personal details, education, work experience, skills, and projects. Interactive Interface: With Angular 17, the CV website offers an interactive user experience. Smooth transitions, animations, and user-friendly navigation enhance engagement and make
    browsing through CVs enjoyable. Modular Architecture: Angular 17's modular architecture facilitates the development of reusable components. Each section of the CV, such as education, experience, skills, and projects, is implemented as a separate component,
    promoting code reusability and maintainability. Routing and Navigation: Angular's built-in routing module enables seamless navigation between different sections of the CV. Users can easily switch between sections using intuitive navigation menus or
    interactive UI elements. Responsive Design: The CV website is designed to be fully responsive, ensuring optimal viewing experience across various devices and screen sizes. Angular 17's Flex Layout module is utilized to create flexible and adaptive
    layouts that adapt to different viewport sizes. Data Binding and Forms: Angular's two-way data binding and form handling capabilities streamline the process of updating and submitting CV information. Users can fill out interactive forms to input their
    details, and changes are automatically reflected in real-time. Integration with APIs: The Angular 17 CV Showcase can be integrated with external APIs for additional functionality. For example, users can import data from LinkedIn or GitHub to populate
    their CVs automatically, saving time and effort.`,
  };

  constructor(private http: HttpClient) {}

  getallProjects() {
    return this.http
      .get<{ [key: string]: Project }>(
        'https://sumitpati7-83579-default-rtdb.firebaseio.com/projects.json'
      )
      .pipe(
        map((response) => {
          let users = [];
          for (let key in response) {
            if (response.hasOwnProperty(key))
              users.push({ ...response[key], id: key });
          }
          return users;
        }),
        catchError((err) => {
          this.errorMessage = err;
          setTimeout(() => {
            this.errorMessage = null;
          }, 5000);
          return throwError(() => err);
        })
      );
  }

  pushAllProjects() {
    return this.http.post(
      'https://sumitpati7-83579-default-rtdb.firebaseio.com/projects.json',
      this.project
    );
  }
}
