import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighligt]',
})
export class Highligt {
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'white';
  }
  
}

