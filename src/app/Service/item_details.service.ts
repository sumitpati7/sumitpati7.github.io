import { Injectable } from '@angular/core';
import { Item } from '../Components/skills/itemClass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  item_details: Item[] = [
    {
      title: 'HTML',
      img_url: '../../../assets/image/icons8-html-logo.svg',
      desc: 'HTML (Hyper Text Markup Language) is the standard markup language used for creating web pages, defining their structure and specifying how content should be displayed in a browser.',
    },
    {
      title: 'C++',
      img_url: '../../../assets/image/icons8-c++.svg',
      desc: 'C++ is a powerful and versatile programming language widely used for system-level development, game development, and high-performance applications.',
    },
    {
      title: 'Git',
      img_url: '../../../assets/image/icons8-git.svg',
      desc: 'Git is a distributed version control system (DVCS) commonly used for tracking changes in source code during software development.',
    },
    {
      title: 'CSS',
      img_url: '../../../assets/image/icons8-css.svg',
      desc: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML',
    },
    {
      title: 'C',
      img_url: '../../../assets/image/icons8-c.svg',
      desc: 'C is a versatile and widely-used programming language known for its efficiency, low-level capabilities, and extensive use in system-level software development and embedded systems.',
    },
    {
      title: 'JavaScript',
      img_url: '../../../assets/image/icons8-js.svg',
      desc: 'JavaScript is a scripting language used for creating interactive web pages and dynamic content. 🚀',
    },
    {
      title: 'TypeScript',
      img_url: '../../../assets/image/icons8-typescript.svg',
      desc: 'TypeScript is a programming language that builds on JavaScript by adding syntax for types. It’s designed to provide better tooling and safety at any scale.',
    },
    {
      title: 'Angular',
      img_url: '../../../assets/image/icons8-angular.svg',
      desc: 'Angular is a comprehensive open-source framework for building web applications. Developed and maintained by Google, it provides a robust set of tools and features to create dynamic, single-page applications (SPAs) and progressive web apps (PWAs).',
    },
    {
      title: 'Figma',
      img_url: '../../../assets/image/icons8-figma.svg',
      desc: 'Figma is a powerful collaborative design tool that brings together various aspects of the design process. ',
    },
    {
      title: 'Bootstrap',
      img_url: '../../../assets/image/icons8-bootstrap.svg',
      desc: 'Bootstrap is a widely-used frontend framework that simplifies web development by providing a comprehensive set of tools, components, and styles. ',
    },
  ];

  getallCourses() {
    return new Observable<Item[]>((sub) => {
      setTimeout(() => {
        sub.next(this.item_details);
      }, 5000);
    });
  }
}
