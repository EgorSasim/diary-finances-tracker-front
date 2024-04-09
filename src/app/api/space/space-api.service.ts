import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceDto, SpaceDtoSearchParams } from './space-api.typings';
import { API_PATH } from '../api.constants';
import { SPACE_API_PATH } from './space-api.constants';

@Injectable({ providedIn: 'root' })
export class SpaceApiService {
  constructor(private httpClient: HttpClient) {}

  public getSpaces(
    searchParams?: SpaceDtoSearchParams
  ): Observable<SpaceDto[]> {
    const params = new HttpParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(([key, value]) =>
        params.append(key, value)
      );
    }

    return this.httpClient.get<SpaceDto[]>(`${API_PATH}/${SPACE_API_PATH}`, {
      responseType: 'json',
      params,
    });
  }

  public getSpace(id: SpaceDto['id']): Observable<SpaceDto> {
    return this.httpClient.get<SpaceDto>(
      `${API_PATH}/${SPACE_API_PATH}/${id}`,
      {
        responseType: 'json',
      }
    );
  }

  public createSpace(space: SpaceDto): Observable<SpaceDto> {
    return this.httpClient.post<SpaceDto>(
      `${API_PATH}/${SPACE_API_PATH}`,
      space
    );
  }

  public removeSpace(id: SpaceDto['id']): Observable<SpaceDto> {
    return this.httpClient.delete<SpaceDto>(
      `${API_PATH}/${SPACE_API_PATH}/${id}`,
      {
        responseType: 'json',
      }
    );
  }

  public updateSpace(
    id: SpaceDto['id'],
    udpateParams: Partial<SpaceDto>
  ): Observable<SpaceDto> {
    return this.httpClient.patch<SpaceDto>(
      `${API_PATH}/${SPACE_API_PATH}/${id}`,
      udpateParams
    );
  }
}
