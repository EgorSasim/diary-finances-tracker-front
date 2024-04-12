import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { BehaviorSubject, filter, map, switchMap } from 'rxjs';
import { Note, NoteEditForm } from '../../../services/note/note.typings';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NoteEditPageBuilder } from './note-edit-page.builder';
import { NoteEditPageService } from './note-edit-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ROUTE_PATH } from '../../../constants/routes-pathes';

@Component({
  selector: 'dft-note-edit-page',
  templateUrl: './note-edit-page.component.html',
  styleUrl: './note-edit-page.component.scss',
  providers: [NoteEditPageBuilder, NoteEditPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteEditPageComponent {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public formGroup: FormGroup<NoteEditForm>;
  public readonly textAreaHeight: string = '20rem';
  private initialFormGroupState: Required<Note>;

  constructor(
    private noteEditPageService: NoteEditPageService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private noteEditPageBuilder: NoteEditPageBuilder,
    private formErrorMessageService: FormErrorMessageService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.handleRouteIdChange();
  }

  private handleRouteIdChange(): void {
    this.isLoading$.next(true);
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        filter((id) => !!id),
        switchMap((id) => this.noteEditPageService.getNote(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((task) => {
        this.isLoading$.next(false);
        if (!task) {
          this.router.navigate([ROUTE_PATH.withHeader]);
        } else {
          this.formGroup = this.noteEditPageBuilder.createFormGroup(task);
          this.initialFormGroupState = {
            ...this.formGroup.getRawValue(),
          } as Required<Note>;
        }
      });
  }

  public resetFormValue(): void {
    this.formGroup.setValue(this.initialFormGroupState);
  }

  public navigateBack(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.home,
    ]);
  }

  public saveChanges(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.isLoading$.next(true);
    const note = this.formGroup.getRawValue() as Required<Note>;
    this.noteEditPageService.saveChanges(note.id, note).subscribe({
      next: () => {
        this.navigateBack();
      },
      complete: () => {
        this.isLoading$.next(false);
      },
    });
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }
}
