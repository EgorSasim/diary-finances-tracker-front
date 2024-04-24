import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Space,
  SpaceSearchParams,
} from '../../../../services/space/space.typings';
import { SpacesPageListService } from './spaces-page-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dft-spaces-page-list',
  templateUrl: './spaces-page-list.component.html',
  styleUrl: './spaces-page-list.component.scss',
  providers: [SpacesPageListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacesPageListComponent {
  public spaces$: Observable<Space[]> =
    this.spacesPageListService.handleSpaces();

  constructor(private spacesPageListService: SpacesPageListService) {
    this.spaces$.subscribe(console.log);
    this.spacesPageListService.handleSpaces().subscribe(console.log);
  }

  public searchParamsChange(params: SpaceSearchParams): void {
    this.spacesPageListService.handleSearchParamsChange(params);
  }
}
