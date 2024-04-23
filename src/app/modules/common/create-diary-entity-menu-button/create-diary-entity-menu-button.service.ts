import { Injectable } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { NoteService } from '../../../services/note/note.service';
import { SpaceService } from '../../../services/space/space.service';
import { Observable } from 'rxjs';
import { Task } from '../../../services/task/task.typings';
import { Note } from '../../../services/note/note.typings';
import { Space } from '../../../services/space/space.typings';

@Injectable()
export class CreateDiaryEntityMenuButtonService {
  constructor(
    private taskService: TaskService,
    private noteService: NoteService,
    private spaceService: SpaceService
  ) {}

  public createTask(task: Task): Observable<Task> {
    return this.taskService.createTask(task);
  }

  public createNote(note: Note): Observable<Note> {
    return this.noteService.createNote(note);
  }

  public createSpace(space: Space): Observable<Space> {
    return this.spaceService.createSpace(space);
  }
}
