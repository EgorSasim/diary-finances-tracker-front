import { Injectable } from '@angular/core';
import { SpaceService } from '../../../../services/space/space.service';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  combineLatest,
  merge,
  startWith,
  switchMap,
} from 'rxjs';
import {
  Space,
  SpaceSearchParams,
} from '../../../../services/space/space.typings';

@Injectable()
export class SpacesPageListService {
  private searchParams$: ReplaySubject<SpaceSearchParams> = new ReplaySubject(
    1
  );

  private prevSearchParamsValue: SpaceSearchParams = {};

  constructor(private spaceService: SpaceService) {}

  public handleSpaces(): Observable<Space[]> {
    return merge(this.searchParams$, this.spaceService.spaceChange$).pipe(
      startWith({}),
      switchMap((searchParams) => {
        if (searchParams) {
          this.prevSearchParamsValue = searchParams;
        }
        return this.spaceService.getSpaces(
          searchParams || this.prevSearchParamsValue
        );
      })
    );
  }

  public handleSearchParamsChange(params: SpaceSearchParams): void {
    this.searchParams$.next(params);
  }
}
