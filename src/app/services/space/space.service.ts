import { Injectable } from '@angular/core';
import { SpaceApiService } from '../../api/space/space-api.service';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { Space, SpaceSearchParams } from './space.typings';

@Injectable({ providedIn: 'root' })
export class SpaceService {
  public spaceChange$: ReplaySubject<void> = new ReplaySubject(1);

  constructor(private spaceApiService: SpaceApiService) {}

  public getSpaces(searchParams?: SpaceSearchParams): Observable<Space[]> {
    return this.spaceApiService.getSpaces(searchParams);
  }

  public getSpace(id: Space['id']): Observable<Space> {
    return this.spaceApiService.getSpace(id);
  }

  public createSpace(space: Space): Observable<Space> {
    return this.spaceApiService
      .createSpace(space)
      .pipe(tap(() => this.spaceChange$.next()));
  }

  public removeSpace(id: Space['id']): Observable<Space> {
    return this.spaceApiService
      .removeSpace(id)
      .pipe(tap(() => this.spaceChange$.next()));
  }

  public updateSpace(
    id: Space['id'],
    updateParams: Partial<Space>
  ): Observable<Space> {
    return this.spaceApiService
      .updateSpace(id, updateParams)
      .pipe(tap(() => this.spaceChange$.next()));
  }
}
