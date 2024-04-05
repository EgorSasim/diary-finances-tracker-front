import { Note } from '../../../../services/note/note.typings';

export type NoteListItem = Pick<Note, 'id' | 'title'>;
