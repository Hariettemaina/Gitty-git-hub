import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightHover]'
})
export class HighlightHoverDirective {

  constructor(private el: ElementRef) { }

  // @HostListener('mouseenter') onMouseEnter(){
  //   this.highlight('black')
  // }
  // highlight(arg0: string) {
  //   throw new Error('Method not implemented.');
  // }

}
