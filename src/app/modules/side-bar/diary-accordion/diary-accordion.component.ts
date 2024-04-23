import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewChild,
} from '@angular/core';
import { DiaryAccordionService } from './diary-accordion.service';
import { Observable } from 'rxjs';
import { Task } from '../../../services/task/task.typings';
import { Note } from '../../../services/note/note.typings';
import { Space } from '../../../services/space/space.typings';
import { MatAccordion } from '@angular/material/expansion';
import { ROUTE_PATH } from '../../../constants/routes-pathes';
import { NavigationService } from '../../../services/navigation/navigation.service';

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
    private navigationService: NavigationService
  ) {}

  public navigateToTaskEditPage(id: Task['id']): void {
    this.navigationService.goToTaskEditPage(id);
  }

  public navigateToNoteEditPage(id: Note['id']): void {
    this.navigationService.goToNoteEditPage(id);
  }

  public navigateToSpaceEditPage(id: Space['id']): void {
    this.navigationService.goToSpaceEditPage(id);
  }
}
