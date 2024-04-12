import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Space } from '../../../services/space/space.typings';
import { SpaceService } from '../../../services/space/space.service';
import { Task } from '../../../services/task/task.typings';
import { TaskService } from '../../../services/task/task.service';
import { Note } from '../../../services/note/note.typings';
import { NoteService } from '../../../services/note/note.service';

@Injectable()
export class SpaceEditPageService {
  constructor(
    private spaceService: SpaceService,
    private taskService: TaskService,
    private noteService: NoteService
  ) {}

  public getSpace(id: Space['id']): Observable<Space> {
    return this.spaceService.getSpace(id);
  }

  public saveChanges(
    id: Space['id'],
    updateParams: Partial<Space>
  ): Observable<Space> {
    return this.spaceService.updateSpace(id, updateParams);
  }

  public getTasks(): Observable<Task[]> {
    return this.taskService.getAllTasks();
  }

  public getNotes(): Observable<Note[]> {
    return this.noteService.getNotes();
  }
}
