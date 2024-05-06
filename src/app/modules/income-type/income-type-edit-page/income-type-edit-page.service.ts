import { Injectable } from '@angular/core';
import { IncomeType } from '../../../services/income-type/income-type.typings';
import { Observable } from 'rxjs';
import { IncomeTypeService } from '../../../services/income-type/income-type.service';

@Injectable()
export class IncomeTypeEditPageService {
  constructor(private incomeTypeService: IncomeTypeService) {}

  public getIncomeType(id: IncomeType['id']): Observable<IncomeType> {
    return this.incomeTypeService.getIncomeType(id);
  }

  public saveChanges(
    id: IncomeType['id'],
    updateParams: Partial<IncomeType>
  ): Observable<IncomeType> {
    return this.incomeTypeService.updateIncomeType(id, updateParams);
  }
}
