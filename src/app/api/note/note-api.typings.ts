import { SpaceDto } from '../space/space-api.typings';

export interface NoteDto {
  id: number;
  title: string;
  description?: string;
  creationDate: Date;
}

export interface NoteWithSpacesDto extends NoteDto {
  spaces?: NoteDtoSpace[];
}

export interface NoteWithSpaceIdsDto extends NoteDto {
  spaceIds?: NoteDtoSpace['id'][];
}

export interface NoteDtoSpace {
  id: SpaceDto['id'];
  name: SpaceDto['name'];
}
