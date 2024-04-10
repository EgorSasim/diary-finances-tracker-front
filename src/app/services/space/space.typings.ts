import { ConvertToForm } from '../../typings/forms';
import { Note } from '../note/note.typings';
import { Task } from '../task/task.typings';

export interface Space {
  id: number;
  name: string;
  taskIds?: Task['id'][];
  noteIds?: Note['id'][];
}

export class SpaceSearchParams {
  id: number;
  number: string;
  taskIds?: Task['id'][];
  noteIds?: Note['id'][];
}

export type SpaceForm = ConvertToForm<Space>;
export type SpaceCreateForm = Required<Omit<SpaceForm, 'id'>>;
export type TaskEditForm = Required<SpaceForm>;
