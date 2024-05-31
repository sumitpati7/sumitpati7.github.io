import { Directive, ElementRef, HostListener } from '@angular/core';
import { ProjectService } from '../../Service/project.service';

@Directive({
  selector: '[appDisplay]',
})
export class DisplayDirective {
  constructor(public element: ElementRef, public service: ProjectService) {}

  @HostListener('document:keydown.escape') onEscape() {
    this.element.nativeElement.setAttribute('class', 'box disappear');
    setTimeout(() => {
      this.service.openDetails = false;
    }, 500);
  }

  ngOnInit() {
    this.element.nativeElement.setAttribute('class', 'box appear');
  }
}
