import { Injectable } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { Observable } from 'rxjs';
import { Task, TaskSearchParams } from '../../../services/task/task.typings';

@Injectable()
export class TasksPageService {
  constructor(private taskService: TaskService) {}

  public getTasks(searchParams?: TaskSearchParams): Observable<Task[]> {
    return this.taskService.getTasks(searchParams);
  }
}
