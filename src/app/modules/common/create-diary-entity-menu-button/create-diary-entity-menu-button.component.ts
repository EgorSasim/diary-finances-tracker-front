import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateModalComponent } from '../../task/task-create-modal/task-create-modal.component';
import { NoteCreateModalComponent } from '../../note/note-create-modal/note-create-modal.component';
import { SpaceCreateModalComponent } from '../../space/space-create-modal/space-create-modal.component';
import { filter, switchMap } from 'rxjs';
import { CreateDiaryEntityMenuButtonService } from './create-diary-entity-menu-button.service';
import { Task } from '../../../services/task/task.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Note } from '../../../services/note/note.typings';
import { Space } from '../../../services/space/space.typings';

@Component({
  selector: 'dft-create-diary-entity-menu-button',
  templateUrl: './create-diary-entity-menu-button.component.html',
  styleUrl: './create-diary-entity-menu-button.component.scss',
  providers: [CreateDiaryEntityMenuButtonService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDiaryEntityMenuButtonComponent {
  constructor(
    private matDialog: MatDialog,
    private createDiaryEntityMenuButtonService: CreateDiaryEntityMenuButtonService,
    private destroyRef: DestroyRef
  ) {}

  public showTaskCreateModal(): void {
    const dialogRef = this.matDialog.open(TaskCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((task) => !!task),
        switchMap((task: Task) =>
          this.createDiaryEntityMenuButtonService.createTask(task)
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public showNoteCreateModal(): void {
    const dialogRef = this.matDialog.open(NoteCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((note) => !!note),
        switchMap((note: Note) =>
          this.createDiaryEntityMenuButtonService.createNote(note)
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public showSpaceCreateModal(): void {
    const dialogRef = this.matDialog.open(SpaceCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((space) => !!space),
        switchMap((space: Space) =>
          this.createDiaryEntityMenuButtonService.createSpace(space)
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
