import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
} from '@angular/core';
import { BehaviorSubject, filter, map, switchMap } from 'rxjs';
import {
  SpaceEdit,
  SpaceEditForm,
} from '../../../services/space/space.typings';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SpaceEditPageService } from './space-edit-page.service';
import { SpaceEditPageBuilder } from './space-edit-page.builder';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BackNavigationService } from '../../../services/back-navigation/back-navigation.service';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'dft-space-edit-page',
  templateUrl: './space-edit-page.component.html',
  styleUrl: './space-edit-page.component.scss',
  providers: [SpaceEditPageService, SpaceEditPageBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceEditPageComponent {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public formGroup: FormGroup<SpaceEditForm>;
  private initialFormGroupState: Required<SpaceEdit>;
  public readonly tasks$ = this.spaceEditPageService.getTasks();
  public readonly notes$ = this.spaceEditPageService.getNotes();

  constructor(
    private spaceEditPageService: SpaceEditPageService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private spaceEditPageBuilder: SpaceEditPageBuilder,
    private formErrorMessageService: FormErrorMessageService,
    private changeDetectorRef: ChangeDetectorRef,
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
        switchMap((id) => this.spaceEditPageService.getSpace(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((space) => {
        this.isLoading$.next(false);
        if (!space) {
          this.navigationService.goToHomePage();
        } else {
          this.formGroup = this.spaceEditPageBuilder.createFormGroup(space);
          this.initialFormGroupState = {
            ...this.formGroup.getRawValue(),
          } as Required<SpaceEdit>;
          this.changeDetectorRef.markForCheck();
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
    const space = this.formGroup.getRawValue() as Required<SpaceEdit>;
    this.spaceEditPageService.saveChanges(space.id, space).subscribe({
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
