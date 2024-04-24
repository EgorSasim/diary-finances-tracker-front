import { ConvertToForm } from '../../typings/forms';
import { Space } from '../space/space.typings';

export interface Note {
  id: number;
  title: string;
  description?: string;
  creationDate: Date;
}

export interface NoteWithSpaces extends Note {
  spaces?: NoteSpace[];
}

export interface NoteWithSpaceIds extends Note {
  spaceIds?: Space['id'][];
}

export interface NoteSpace {
  id: Space['id'];
  name: Space['name'];
}

export interface NoteSearchParams {
  title?: string;
  creationDate?: Date;
}

export type NoteForm = ConvertToForm<NoteWithSpaceIds>;
export type NoteCreateForm = Required<Omit<NoteForm, 'id'>>;
export type NoteEditForm = Required<NoteForm>;
