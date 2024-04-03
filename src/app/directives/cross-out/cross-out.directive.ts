import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[crossOut]',
})
export class CrossOutDirective implements OnInit, OnChanges {
  @Input() isCrossed = false;
  @HostBinding('style.text-decoration') textDecoration = '';

  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    this.updateElementCross();
  }

  public ngOnChanges(): void {
    this.updateElementCross();
  }

  private updateElementCross(): void {
    this.textDecoration = this.isCrossed ? 'line-through' : '';
  }
}
