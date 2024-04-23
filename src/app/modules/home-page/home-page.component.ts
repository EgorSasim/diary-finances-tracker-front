import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
} from '@angular/core';
import { HomePageService } from './home-page.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Task } from '../../services/task/task.typings';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CompletedTaskListItem } from '../task/task-list/task-list-item/task-list-item.typings';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../constants/routes-pathes';
import { Note } from '../../services/note/note.typings';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'dft-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [HomePageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public tasks$: Observable<Task[]> = this.homePageService.handleTasks();
  public notes$: Observable<Note[]> = this.homePageService.handleNotes();

  constructor(
    private homePageService: HomePageService,
    private destroyRef: DestroyRef,
    private navigationService: NavigationService
  ) {}

  public completeTask(completedTaskItem: CompletedTaskListItem): void {
    this.homePageService
      .completeTask(completedTaskItem)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  public goToTaskEditPage(id: number): void {
    this.navigationService.goToTaskEditPage(id);
  }

  public removeTask(id: number): void {
    this.homePageService
      .removeTask(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  public showTaskCreateModal(): void {
    this.homePageService.showTaskCreateModal().subscribe();
  }

  public showNoteCreateModal(): void {
    this.homePageService.showNoteCreateModal().subscribe();
  }

  public goToNoteEditPage(id: Note['id']): void {
    this.navigationService.goToNoteEditPage(id);
  }

  public removeNote(id: Note['id']): void {
    this.homePageService
      .removeNote(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
