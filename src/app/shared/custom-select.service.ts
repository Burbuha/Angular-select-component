import { Injectable } from '@angular/core';
import { SelectOption } from './models/ModelSelectOption';

@Injectable({
  providedIn: 'root',
})
export class CustomSelectService {
  constructor() {}

  selectOptions(event: any, option: SelectOption, selectedOptions: Array<any>) {
    if (typeof option.value === 'undefined' || option.value === null) {
      return;
    } else if (event.target.checked === true) {
      selectedOptions.push(option.value);
    } else {
      selectedOptions.forEach((item, i) => {
        if (item === option.value) {
          selectedOptions.splice(i, 1);
        }
      });
    }
  }
}
