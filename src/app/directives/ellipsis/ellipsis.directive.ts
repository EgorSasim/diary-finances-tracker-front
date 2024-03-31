import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ellipsis]',
  host: { '(window:resize)': 'onResize($event)' },
})
export class EllipsisDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.onResize();
    });
  }

  public onResize() {
    const clientWidth = this.elementRef.nativeElement.clientWidth;
    const scrollWidth = this.elementRef.nativeElement.scrollWidth;
    const textContent = this.elementRef.nativeElement.textContent;
    if (clientWidth < scrollWidth) {
      const childElement = document.createElement('div');
      childElement.textContent = this.elementRef.nativeElement.textContent;
      this.elementRef.nativeElement.appendChild(childElement);
      this.elementRef.nativeElement.removeChild(
        this.elementRef.nativeElement.firstChild
      );
      childElement.style.overflow = 'hidden';
      childElement.style.textOverflow = 'ellipsis';
      childElement.style.whiteSpace = 'nowrap';
      childElement.style.width = '100%';
    }
  }
}
