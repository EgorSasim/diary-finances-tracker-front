import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
} from '@angular/core';
import { BehaviorSubject, filter, map, switchMap } from 'rxjs';
import { Space, SpaceEditForm } from '../../../services/space/space.typings';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SpaceEditPageService } from './space-edit-page.service';
import { SpaceEditPageBuilder } from './space-edit-page.builder';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ROUTE_PATH } from '../../../constants/routes-pathes';

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
  private initialFormGroupState: Required<Space>;
  public readonly tasks$ = this.spaceEditPageService.getTasks();
  public readonly notes$ = this.spaceEditPageService.getNotes();

  constructor(
    private spaceEditPageService: SpaceEditPageService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private spaceEditPageBuilder: SpaceEditPageBuilder,
    private formErrorMessageService: FormErrorMessageService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
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
          this.router.navigate([ROUTE_PATH.withHeader]);
        } else {
          this.formGroup = this.spaceEditPageBuilder.createFormGroup(space);
          this.initialFormGroupState = {
            ...this.formGroup.getRawValue(),
          } as Required<Space>;
          this.changeDetectorRef.markForCheck();
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
    const space = this.formGroup.getRawValue() as Required<Space>;
    console.log('save space: ', space);
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
