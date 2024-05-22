import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIcon]',
})
export class IconDirective {
  @Input() value!: boolean;
  sun_full = `<i class="fa-solid fa-sun"></i>`;
  moon = `<i class="fa-regular fa-moon"></i>`;
  sun = `<i class="fa-regular fa-sun"></i>`;
  moon_full = `<i class="fa-solid fa-moon"></i>`;
  constructor(public element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.check(this.moon_full, this.sun_full, '#4a5c6a');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.check(this.moon, this.sun, '#ccc');
  }

  ngOnInit() {
    this.check(this.moon, this.sun, '#ccc');
  }

  check(var1: string, var2: string, color: string) {
    this.element.nativeElement.style.color = color;
    if (this.value) {
      this.element.nativeElement.innerHTML = var1;
    } else {
      this.element.nativeElement.innerHTML = var2;
    }
  }
}
