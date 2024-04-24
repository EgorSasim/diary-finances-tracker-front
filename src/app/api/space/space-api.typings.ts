import { NoteDto } from '../note/note-api.typings';
import { TaskDto } from '../task/task-api.typings';

export interface SpaceDto {
  id: number;
  name: string;
  tasks?: TaskDto[];
  notes?: NoteDto[];
}

export class SpaceDtoSearchParams {
  name?: string;
  taskIds?: TaskDto['id'][];
  noteIds?: NoteDto['id'][];
}
