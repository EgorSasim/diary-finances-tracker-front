import { NoteDto } from '../note/note-api.typings';
import { TaskDto } from '../task/task-api.typings';

export interface SpaceDto {
  id: number;
  name: string;
  taskIds?: TaskDto['id'][];
  noteIds?: NoteDto['id'][];
}

export class SpaceDtoSearchParams {
  id: number;
  number: string;
  taskIds?: TaskDto['id'][];
  noteIds?: NoteDto['id'][];
}
