import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceSearchPanelComponent } from './space-search-panel.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SpaceSearchPanelComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
  ],
  exports: [SpaceSearchPanelComponent],
})
export class SpaceSearchPanelModule {}
