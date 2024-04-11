import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewChild,
} from '@angular/core';
import { DiaryAccordionService } from './diary-accordion.service';
import { Observable, switchMap } from 'rxjs';
import { Task } from '../../../services/task/task.typings';
import { Note } from '../../../services/note/note.typings';
import { Space } from '../../../services/space/space.typings';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../../constants/routes-pathes';

@Component({
  selector: 'dft-diary-accordion',
  templateUrl: './diary-accordion.component.html',
  styleUrl: './diary-accordion.component.scss',
  providers: [DiaryAccordionService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiaryAccordionComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  public tasks$: Observable<Task[]> =
    this.diaryAccordionService.handleTaskChange();

  public readonly notes$: Observable<Note[]> =
    this.diaryAccordionService.handleNotesChange();

  public readonly spaces$: Observable<Space[]> =
    this.diaryAccordionService.handleSpacesChange();

  constructor(
    private diaryAccordionService: DiaryAccordionService,
    private router: Router
  ) {}

  public navigateToTaskEditPage(id: Task['id']): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.taskEditPage, id]);
  }

  public navigateToNoteEditPage(id: Note['id']): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.noteEditPage, id]);
  }

  public navigateToSpaceEditPage(id: Space['id']): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.spaceEditPage, id]);
  }
}
