import {
  AfterViewInit,
  Directive,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';
import {
  COMPLETED_OPACITY,
  UNCOMPLETED_OPACITY,
} from './completed.directive.constants';

@Directive({ selector: '[completed]' })
export class CompletedDirective implements AfterViewInit, OnChanges {
  @Input() public completed: boolean = true;
  @HostBinding('style.opacity') opacity = UNCOMPLETED_OPACITY;

  public ngAfterViewInit(): void {
    this.updateOpacity();
  }

  public ngOnChanges(): void {
    this.updateOpacity();
  }

  public updateOpacity(): void {
    this.opacity = this.completed ? COMPLETED_OPACITY : UNCOMPLETED_OPACITY;
  }
}
