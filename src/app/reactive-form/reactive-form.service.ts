import { Injectable } from '@angular/core';

import { SelectOption } from '../shared/models/ModelSelectOption';
import { cars } from './data';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormService {
  getBrand(): SelectOption[] {
    return cars.brand;
  }

  getModel(value: any): SelectOption[] {
    const brandCar = cars.brand.find((el) => el.value === value.brandAuto);
    if (!brandCar?.model) return [];
    return brandCar.model;
  }

  getYear(value: any): SelectOption[] {
    if (value.model !== null) {
      const brandCar = cars.brand.find((el) => el.value === value.brandAuto);
      const modelCar = brandCar?.model.find(
        (el) => el.value === value.modelAuto
      );
      if (modelCar) return modelCar.year;
    }
    return [];
  }

  getGeneration(value: any): SelectOption[] {
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

  getFullAutoName(addFullAutoName: string): string {
    return addFullAutoName;
  }
}
