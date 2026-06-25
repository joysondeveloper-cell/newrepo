import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightone]',
})
export class Highlightone {
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.color='black'
  }
  @HostListener('mouseenter')
onmouseenterw1w1w()
{
 this.el.nativeElement.style.backgroundColor='blue'
}

  @HostListener('mouseleave')
mouseleave()
{
 this.el.nativeElement.style.backgroundColor='white'
}
}
