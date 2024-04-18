import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[overdued]',
})
export class OverduedDirective implements AfterViewInit {
  @Input() public overdued: boolean;

  constructor(private elementRef: ElementRef) {}

  public ngAfterViewInit(): void {
    if (this.overdued) {
      this.elementRef.nativeElement.style.color = 'red';
    }
  }
}
