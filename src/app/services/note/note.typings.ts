import { ConvertToForm } from '../../typings/forms';

export interface Note {
  id: number;
  title: string;
  description?: string;
}

export type NoteForm = ConvertToForm<Note>;
export type NoteCreateForm = Required<Omit<NoteForm, 'id'>>;
export type NoteEditForm = Required<NoteForm>;
