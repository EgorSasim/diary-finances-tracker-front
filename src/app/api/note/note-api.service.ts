import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  NoteDto,
  NoteWithSpaceIdsDto,
  NoteWithSpacesDto,
} from './note-api.typings';
import { API_PATH } from '../api.constants';
import { NOTE_API_PATH } from './note-api.constants';
import { NoteSearchParams } from '../../services/note/note.typings';
import { getNoteTrulyTypeValues } from './note-api.helpers';

@Injectable({ providedIn: 'root' })
export class NoteApiService {
  constructor(private httpClient: HttpClient) {}

  public getNotes(searchParams?: NoteSearchParams): Observable<NoteDto[]> {
    let params: HttpParams = new HttpParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(
        ([key, value]) => (params = params.append(key, value))
      );
    }
    return this.httpClient
      .get<NoteDto[]>(`${API_PATH}/${NOTE_API_PATH}`, {
        responseType: 'json',
        params,
      })
      .pipe(map((notes) => notes.map(getNoteTrulyTypeValues)));
  }

  public getNote(id: NoteDto['id']): Observable<NoteWithSpacesDto> {
    return this.httpClient.get<NoteWithSpacesDto>(
      `${API_PATH}/${NOTE_API_PATH}/${id}`,
      {
        responseType: 'json',
      }
    );
  }

  public createNote(note: NoteWithSpaceIdsDto): Observable<NoteWithSpacesDto> {
    return this.httpClient.post<NoteDto>(`${API_PATH}/${NOTE_API_PATH}`, note);
  }

  public removeNote(id: NoteDto['id']): Observable<NoteDto> {
    return this.httpClient.delete<NoteDto>(
      `${API_PATH}/${NOTE_API_PATH}/${id}`
    );
  }

  public updateNote(
    id: NoteDto['id'],
    updateParams: Partial<NoteWithSpaceIdsDto>
  ): Observable<NoteWithSpacesDto> {
    return this.httpClient.patch<NoteWithSpacesDto>(
      `${API_PATH}/${NOTE_API_PATH}/${id}`,
      updateParams
    );
  }
}
