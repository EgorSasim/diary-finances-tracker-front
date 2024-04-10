import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ellipsis]',
})
export class EllipsisDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  public ngAfterViewInit(): void {
    this.onResize();
  }

  public onResize() {
    const clientWidth = this.elementRef.nativeElement.clientWidth;
    const scrollWidth = this.elementRef.nativeElement.scrollWidth;
    const textContent = this.elementRef.nativeElement.textContent;
    const childElement = document.createElement('div');
    childElement.style.overflow = 'hidden';
    childElement.style.textOverflow = 'ellipsis';
    childElement.style.whiteSpace = 'nowrap';
    childElement.style.width = clientWidth;
    if (clientWidth < scrollWidth) {
      childElement.textContent = textContent;
      this.elementRef.nativeElement.appendChild(childElement);
      this.elementRef.nativeElement.removeChild(
        this.elementRef.nativeElement.firstChild
      );
    }
  }
}
