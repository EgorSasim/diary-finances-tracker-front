import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { TaskEditPageService } from './task-edit-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter, map, switchMap, tap } from 'rxjs';
import { Task, TaskEditForm } from '../../../services/task/task.typings';
import { AbstractControl, FormGroup } from '@angular/forms';
import { TaskEditPageBuilder } from './task-edit-page.builder';
import { ROUTE_PATH } from '../../../constants/routes-pathes';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { TASK_PRIORITY_TO_NAME } from '../../../constants/task-priorities';

@Component({
  selector: 'dft-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrl: './task-edit-page.component.scss',
  providers: [TaskEditPageService, TaskEditPageBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditPageComponent implements OnInit {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public formGroup: FormGroup<TaskEditForm>;
  public readonly priorities = Object.keys(TASK_PRIORITY_TO_NAME);
  public readonly priorityNames = Object.values(TASK_PRIORITY_TO_NAME);
  public readonly textAreaHeight: string = '20rem';
  private initialFormGroupState: Required<Task>;

  constructor(
    private taskEditPageService: TaskEditPageService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private taskEditPageBuilder: TaskEditPageBuilder,
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
        switchMap((id) => this.taskEditPageService.getTask(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((task) => {
        this.isLoading$.next(false);
        if (!task) {
          this.router.navigate([ROUTE_PATH.withHeader]);
        } else {
          this.formGroup = this.taskEditPageBuilder.createFormGroup(task);
          this.initialFormGroupState = {
            ...this.formGroup.getRawValue(),
          } as Required<Task>;
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
    const task = this.formGroup.getRawValue() as Required<Task>;
    this.taskEditPageService.saveChanges(task.id, task).subscribe({
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
