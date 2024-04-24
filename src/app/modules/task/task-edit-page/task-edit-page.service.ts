import { Injectable } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { Observable } from 'rxjs';
import { Task, TaskWithSpaces } from '../../../services/task/task.typings';

@Injectable()
export class TaskEditPageService {
  constructor(private taskService: TaskService) {}

  public getTask(id: Task['id']): Observable<TaskWithSpaces> {
    return this.taskService.getTask(id);
  }

  public saveChanges(
    id: Task['id'],
    updateParams: Partial<Task>
  ): Observable<Task> {
    return this.taskService.updateTask(id, updateParams);
  }
}
