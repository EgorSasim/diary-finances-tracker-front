import { Injectable } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { Observable } from 'rxjs';
import { Task } from '../../../services/task/task.typings';

@Injectable()
export class TaskEditPageService {
  constructor(private taskService: TaskService) {}

  public getTask(id: number): Observable<Task> {
    return this.taskService.getTask(id);
  }

  public saveChanges(
    id: Task['id'],
    updateParams: Partial<Task>
  ): Observable<void> {
    return this.taskService.updateTask(id, updateParams);
  }
}
