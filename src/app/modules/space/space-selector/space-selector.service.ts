import { Injectable } from '@angular/core';
import { SpaceService } from '../../../services/space/space.service';
import { Observable, startWith, switchMap } from 'rxjs';
import { Space } from '../../../services/space/space.typings';

@Injectable()
export class SpaceSelectorService {
  constructor(private spaceService: SpaceService) {}

  public handleSpaces(): Observable<Space[]> {
    return this.spaceService.spaceChange$.pipe(
      startWith(true),
      switchMap(() => this.spaceService.getSpaces())
    );
  }
}
