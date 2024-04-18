import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'dft-tasks-page-board',
  templateUrl: './tasks-page-board.component.html',
  styleUrl: './tasks-page-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageBoardComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inReview = ['task1', 'task2', 'task3', 'task4'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

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
    console.log(
      'curr container data: ',
      event.container.data[event.currentIndex]
    );
  }
}
