import { Injectable } from '@angular/core';
import { SelectOption } from '../shared/ModelSelectOption';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {

  addBrand(brands: SelectOption[]): SelectOption[] {
    return brands;
  }

  addModel(models: SelectOption[], value: string): SelectOption[] {
    return models.filter(
      (model) => model.type == value
    );
  }

  addSelectValue(selectValue: SelectOption[], value: string): SelectOption[] {
    if (value !== null) {
      return selectValue;
    }
    return [];
  }

  addFullAutoName(addFullAutoName: string): string {
    return addFullAutoName;
  }

}
