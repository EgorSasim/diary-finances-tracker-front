import { ConvertToForm } from '../../typings/forms';
import { Note } from '../note/note.typings';
import { Task } from '../task/task.typings';

export interface Space {
  id: number;
  name: string;
  tasks?: Task[];
  notes?: Note[];
}

export interface SpaceCreate {
  id: number;
  name: string;
  taskIds?: Task['id'][];
  noteIds?: Note['id'][];
}

export interface SpaceEdit {
  id: number;
  name: string;
  taskIds?: Task['id'][];
  noteIds?: Note['id'][];
}

export class SpaceSearchParams {
  name?: string;
  taskIds?: Task['id'][];
  noteIds?: Note['id'][];
}

export type SpaceCreateForm = Required<Omit<ConvertToForm<SpaceCreate>, 'id'>>;
export type SpaceEditForm = Required<ConvertToForm<SpaceEdit>>;
