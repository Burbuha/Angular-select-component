import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ReactiveFormService } from '../reactive-form.service';
import { SelectOption } from '../../shared/models/ModelSelectOption';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  multiselect: boolean = false;

  currentValue!: string;
  customSelectControl!: FormControl;
  selectAutoFormGroup!: FormGroup;
  resultFullAutoName: string = '';

  constructor(private reactiveFormService: ReactiveFormService) {}

  ngOnInit() {
    this.selectAutoFormGroup = new FormGroup({
      fullAutoName: new FormControl(null),
      brandAuto: new FormControl(null),
      modelAuto: new FormControl(null),
      yearAuto: new FormControl(null),
      generationAuto: new FormControl(null),
    });

    this.selectAutoFormGroup.valueChanges.subscribe((value) => {
      if (
        value.brandAuto === null ||
        value.modelAuto === null ||
        value.generationAuto === null
      )
        return;
      return (this.currentValue = `brand: ${value.brandAuto}, model: ${value.modelAuto}, generation: ${value.generationAuto}`);
    });
  }

  addBrand(): SelectOption[] {
    return this.reactiveFormService.addBrand();
  }

  addModel(): SelectOption[] {
    const value = this.selectAutoFormGroup.value;
    return this.reactiveFormService.addModel(value);
  }

  addYear(): SelectOption[] {
    const value = this.selectAutoFormGroup.value;
    return this.reactiveFormService.addYear(value);
  }

  addGeneration(): SelectOption[] {
    const value = this.selectAutoFormGroup.value;
    return this.reactiveFormService.addGeneration(value);
  }
}
