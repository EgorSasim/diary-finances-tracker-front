import { Note } from '../../services/note/note.typings';

export function getNoteTrulyTypeValues(note: Note): Note {
  return {
    ...note,
    creationDate: new Date(note.creationDate),
  };
}
