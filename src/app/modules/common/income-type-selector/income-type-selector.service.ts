import { Injectable } from '@angular/core';
import { IncomeTypeService } from '../../../services/income-type/income-type.service';
import { Observable } from 'rxjs';
import { IncomeType } from '../../../services/income-type/income-type.typings';

@Injectable()
export class IncomeTypeSelectorService {
  constructor(private incomeTypeService: IncomeTypeService) {}

  public getIncomeTypes(): Observable<IncomeType[]> {
    return this.incomeTypeService.getIncomeTypes();
  }
}
