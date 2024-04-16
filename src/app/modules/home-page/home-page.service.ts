import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs';
import { User } from '../../services/user/user.typings';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../services/task/task.typings';
import { CompletedTaskListItem } from '../task/task-list/task-list-item/task-list-item.typings';
import { Note } from '../../services/note/note.typings';
import { NoteService } from '../../services/note/note.service';
import { Space } from '../../services/space/space.typings';
import { SpaceService } from '../../services/space/space.service';

@Injectable()
export class HomePageService {
  constructor(
    private userService: UserService,
    private noteService: NoteService,
    private taskService: TaskService,
    private spaceService: SpaceService
  ) {}

  public getUserInfo(): Observable<User> {
    return this.userService.getUserInfo();
  }

  public createTask(task: Task): Observable<unknown> {
    return this.taskService.createTask(task);
  }

  public getAllTasks(): Observable<Task[]> {
    return this.taskService.getTasks();
  }

  public removeTask(id: number): Observable<Task> {
    return this.taskService.removeTask(id);
  }

  public completeTask(
    completedTaskItem: CompletedTaskListItem
  ): Observable<Task> {
    return this.taskService.updateTask(completedTaskItem.id, {
      status: completedTaskItem.status,
    });
  }

  public createNote(note: Note): Observable<Note> {
    return this.noteService.createNote(note);
  }

  public getNotes(): Observable<Note[]> {
    return this.noteService.getNotes();
  }

  public removeNote(id: Note['id']): Observable<Note> {
    return this.noteService.removeNote(id);
  }

  public createSpace(space: Space): Observable<Space> {
    return this.spaceService.createSpace(space);
  }
}
