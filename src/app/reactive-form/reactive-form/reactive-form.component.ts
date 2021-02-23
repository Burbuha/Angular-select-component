import { Component, OnInit } from '@angular/core';
import { SelectOption } from '../../shared/models/ModelSelectOption';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormService } from '../reactive-form.service';
import { brands, models, years, generations } from './data';

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
    return this.reactiveFormService.addBrand(brands);
  }

  addModel(): SelectOption[] {
    let value = this.selectAutoFormGroup.value.brandAuto;
    return this.reactiveFormService.addModel(models, value);
  }

  addYear(): SelectOption[] {
    let value = this.selectAutoFormGroup.value.modelAuto;
    return this.reactiveFormService.addSelectValue(years, value);
  }

  addGeneration(): SelectOption[] {
    let value = this.selectAutoFormGroup.value.yearAuto;
    return this.reactiveFormService.addSelectValue(generations, value);
  }
}
