import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-text-area',
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaComponent implements AfterViewInit {
  @ViewChild('textArea') public textArea: ElementRef;
  @Input() public height: string = '10rem';
  @Input() public control: FormControl<string>;
  @Input() public resizable: boolean = false;

  constructor(
    private renderer2: Renderer2,
    private formErrorMessageService: FormErrorMessageService
  ) {}

  public ngAfterViewInit(): void {
    this.setTextAreaHeight();
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  private setTextAreaHeight(): void {
    const height = this.height;
    this.renderer2.setStyle(this.textArea.nativeElement, 'height', height);
  }
}
