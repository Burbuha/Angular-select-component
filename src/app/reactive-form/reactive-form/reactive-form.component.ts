import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ReactiveFormService } from '../reactive-form.service';
import { SelectOption } from '../../shared/models/ModelSelectOption';
import { cars } from '../data';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  multiselect: boolean = false;

  currentValue: string | Array<any> = '';
  fullAutoName: string | Array<any> = '';
  customSelectControl!: FormControl;
  selectAutoFormGroup!: FormGroup;
  resultFullAutoName: string = '';
  subscriptions: Array<any> = [];

  constructor(private reactiveFormService: ReactiveFormService) { }

  ngOnInit() {
    this.selectAutoFormGroup = new FormGroup({
      fullAutoName: new FormControl(null),
      brandAuto: new FormControl(null),
      modelAuto: new FormControl(null),
      yearAuto: new FormControl(null),
      generationAuto: new FormControl(null),
    });

    this.subscriptions.push(
      this.selectAutoFormGroup.valueChanges.subscribe((value) => {
        this.fullAutoName = `${value.brandAuto}, ${value.modelAuto}, ${value.generationAuto}`;
        if (value.brandAuto !== null, value.modelAuto !== null, value.generationAuto !== null) {
          this.currentValue = this.fullAutoName;
        };
        return this.fullAutoName;
      })
    );

    this.subscriptions.push(
      this.selectAutoFormGroup.get('brandAuto')?.valueChanges.subscribe(() => {
        this.selectAutoFormGroup.get('modelAuto')?.reset();
        this.selectAutoFormGroup.get('yearAuto')?.reset();
        this.selectAutoFormGroup.get('generationAuto')?.reset();
      })
    );

    this.subscriptions.push(
      this.selectAutoFormGroup.get('modelAuto')?.valueChanges.subscribe(() => {
        this.selectAutoFormGroup.get('yearAuto')?.reset();
        this.selectAutoFormGroup.get('generationAuto')?.reset();
      })
    );

    this.subscriptions.push(
      this.selectAutoFormGroup.get('yearAuto')?.valueChanges.subscribe(() => {
        this.selectAutoFormGroup.get('generationAuto')?.reset();
      })
    );

    this.subscriptions.push(
      this.selectAutoFormGroup
        .get('fullAutoName')
        ?.valueChanges.subscribe((value) => {
          const [brand, model, generation] = value.split(', ');
          cars.brand.forEach((item) => {
            if (item.value === brand) {
              this.selectAutoFormGroup.get('brandAuto')?.setValue(brand);
            }
            item.model.forEach((item) => {
              if (item.value === model) {
                this.selectAutoFormGroup.get('modelAuto')?.setValue(model);
              }
              item.year.forEach((item) => {
                item.generation.forEach((item) => {
                  if (item.value === generation) {
                    this.selectAutoFormGroup.get('generationAuto')?.setValue(generation);
                  }
                });
              })
            })
          })
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  getBrand(): SelectOption[] {
    return this.reactiveFormService.getBrand();
  }

  getModel(): SelectOption[] {
    const value = this.selectAutoFormGroup.value;
    return this.reactiveFormService.getModel(value);
  }

  getYear(): SelectOption[] {
    const value = this.selectAutoFormGroup.value;
    return this.reactiveFormService.getYear(value);
  }

  getGeneration(): SelectOption[] {
    const value = this.selectAutoFormGroup.value;
    return this.reactiveFormService.getGeneration(value);
  }
}
