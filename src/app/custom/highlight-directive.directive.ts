import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

}
