import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TasksPageBoardService } from './tasks-page-board.service';
import { Observable } from 'rxjs';
import { Task } from '../../../../services/task/task.typings';

@Component({
  selector: 'dft-tasks-page-board',
  templateUrl: './tasks-page-board.component.html',
  styleUrl: './tasks-page-board.component.scss',
  providers: [TasksPageBoardService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageBoardComponent {
  public toDoTasks$: Observable<Task[]> = this.tasksPageBoardService.toDoTasks$;
  public inProgressTasks$: Observable<Task[]> =
    this.tasksPageBoardService.inProgressTasks$;
  public doneTasks$: Observable<Task[]> = this.tasksPageBoardService.doneTasks$;

  constructor(private tasksPageBoardService: TasksPageBoardService) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log('event container', event.container);
    const updatedTaskId = (
      event.container.data[event.currentIndex] as unknown as Task
    ).id;
    const status = (event.container.data[0] as unknown as Task).status;
    console.log('new status: ', status);
    this.tasksPageBoardService.updateTask(updatedTaskId, status).subscribe();
  }
}
