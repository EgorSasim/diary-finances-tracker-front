import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
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
export class TasksPageBoardComponent implements AfterViewInit {
  @ViewChild('noStatusList') noStatusList: CdkDropList<Task[]>;
  @ViewChild('todoList') toDoList: CdkDropList<Task[]>;
  @ViewChild('inProgressList') inProgressList: CdkDropList<Task[]>;
  @ViewChild('doneList') doneList: CdkDropList<Task[]>;

  public noStatusTasks$: Observable<Task[]> =
    this.tasksPageBoardService.noStatusTasks$;
  public toDoTasks$: Observable<Task[]> = this.tasksPageBoardService.toDoTasks$;
  public inProgressTasks$: Observable<Task[]> =
    this.tasksPageBoardService.inProgressTasks$;
  public doneTasks$: Observable<Task[]> = this.tasksPageBoardService.doneTasks$;

  private tasksPageContainerNameToTaskStatusMap: Map<
    CdkDropList,
    Task['status']
  >;

  constructor(private tasksPageBoardService: TasksPageBoardService) {}

  public ngAfterViewInit(): void {
    this.tasksPageContainerNameToTaskStatusMap = new Map([
      [this.noStatusList, 'NoStatus'],
      [this.toDoList, 'ToDo'],
      [this.inProgressList, 'InProgress'],
      [this.doneList, 'Done'],
    ]);
  }

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
    const containerName = this.tasksPageContainerNameToTaskStatusMap.get(
      event.container
    ) as Task['status'];
    const taskId = (event.container.data[event.currentIndex] as unknown as Task)
      .id;
    this.tasksPageBoardService.updateTask(taskId, containerName).subscribe();
  }
}
