import { Component, Type } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

export type CreateEntityMenu = CreateEnityMenuItem[];

export interface CreateEnityMenuItem {
  name: string;
  component: typeof Component;
}
