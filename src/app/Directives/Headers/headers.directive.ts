import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Headers]',
})
export class HeadersDirective {
  constructor(public element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = '#0181b0';
    this.element.nativeElement.style.borderBottom = '3px solid #fff';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = '#fff';
    this.element.nativeElement.style.borderBottom = '3px solid #0181b0';
  }

  ngOnInit() {
    this.element.nativeElement.style.color = '#fff';
    this.element.nativeElement.style.fontSize = '45px';
    this.element.nativeElement.style.borderBottom = '3px solid #0181b0';
    this.element.nativeElement.style.transition = '0.6s all ease-in-out';
    this.element.nativeElement.style.maxWidth = 'max-content';
  }
}
