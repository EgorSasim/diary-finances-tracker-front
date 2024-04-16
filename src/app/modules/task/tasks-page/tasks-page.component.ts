import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TasksPageService } from './tasks-page.service';

@Component({
  selector: 'dft-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss',
  providers: [TasksPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageComponent {
  constructor(private tasksPageService: TasksPageService) {
    this.tasksPageService
      .getTasks({ status: 'Done' })
      .subscribe((tasks) => console.log('tasks: ', tasks));
  }
}
