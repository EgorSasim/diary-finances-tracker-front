import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { BehaviorSubject, filter, map, switchMap } from 'rxjs';
import {
  Note,
  NoteEditForm,
  NoteWithSpaceIds,
} from '../../../services/note/note.typings';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NoteEditPageBuilder } from './note-edit-page.builder';
import { NoteEditPageService } from './note-edit-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ROUTE_PATH } from '../../../constants/routes-pathes';
import { BackNavigationService } from '../../../services/back-navigation/back-navigation.service';
import { NavigationService } from '../../../services/navigation/navigation.service';

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
  private initialFormGroupState: Required<NoteWithSpaceIds>;

  constructor(
    private noteEditPageService: NoteEditPageService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private noteEditPageBuilder: NoteEditPageBuilder,
    private formErrorMessageService: FormErrorMessageService,
    private backNavigationService: BackNavigationService,
    private navigationService: NavigationService
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
      .subscribe((note) => {
        this.isLoading$.next(false);
        if (!note) {
          this.navigationService.goToHomePage();
        } else {
          this.formGroup = this.noteEditPageBuilder.createFormGroup({
            ...note,
            spaceIds: note?.spaces?.map((space) => space.id),
          });
          this.initialFormGroupState = {
            ...(this.formGroup.getRawValue() as Required<NoteWithSpaceIds>),
          };
        }
      });
  }

  public resetFormValue(): void {
    this.formGroup.setValue(this.initialFormGroupState);
  }

  public navigateBack(): void {
    this.backNavigationService.back();
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
