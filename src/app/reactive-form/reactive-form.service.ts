import { Injectable } from '@angular/core';

import { SelectOption } from '../shared/models/ModelSelectOption';
import { cars } from './data';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormService {
  addBrand(): SelectOption[] {
    return cars.brand;
  }

  addModel(value: string): SelectOption[] {
    const brandCar = cars.brand.find((el) => el.value === value);
    if (!brandCar?.model) return [];
    return brandCar.model;
  }

  addYear(value: any): SelectOption[] {
    if (value.model !== null) {
      const brandCar = cars.brand.find((el) => el.value === value.brandAuto);
      const modelCar = brandCar?.model.find(
        (el) => el.value === value.modelAuto
      );
      if (modelCar) return modelCar.year;
    }
    return [];
  }

  addGeneration(value: any): SelectOption[] {
    if (value.yearAuto !== null) {
      const brandCar = cars.brand.find((el) => el.value === value.brandAuto);
      const modelCar = brandCar?.model.find(
        (el) => el.value === value.modelAuto
      );
      const yearCar = modelCar?.year.find((el) => el.value === value.yearAuto);
      if (yearCar) return yearCar.generation;
    }
    return [];
  }

  addFullAutoName(addFullAutoName: string): string {
    return addFullAutoName;
  }
}
