import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteDto } from './note-api.typings';
import { API_PATH } from '../api.constants';
import { NOTE_API_PATH } from './note-api.constants';

@Injectable({ providedIn: 'root' })
export class NoteApiService {
  constructor(private httpClient: HttpClient) {}

  public getNotes(): Observable<NoteDto[]> {
    return this.httpClient.get<NoteDto[]>(`${API_PATH}/${NOTE_API_PATH}`, {
      responseType: 'json',
    });
  }

  public getNote(id: NoteDto['id']): Observable<NoteDto> {
    return this.httpClient.get<NoteDto>(`${API_PATH}/${NOTE_API_PATH}/${id}`, {
      responseType: 'json',
    });
  }

  public createNote(note: NoteDto): Observable<NoteDto> {
    return this.httpClient.post<NoteDto>(`${API_PATH}/${NOTE_API_PATH}`, note);
  }

  public removeNote(id: NoteDto['id']): Observable<NoteDto> {
    return this.httpClient.delete<NoteDto>(
      `${API_PATH}/${NOTE_API_PATH}/${id}`
    );
  }

  public updateNote(
    id: NoteDto['id'],
    updateParams: Partial<NoteDto>
  ): Observable<NoteDto> {
    return this.httpClient.patch<NoteDto>(
      `${API_PATH}/${NOTE_API_PATH}/${id}`,
      updateParams
    );
  }
}
