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

  constructor(private reactiveFormService: ReactiveFormService) {}

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
        return (this.fullAutoName = `${value.brandAuto}, ${value.modelAuto}, ${value.generationAuto}`);
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
          this.fullAutoName = value.split(', ');
          console.log(this.fullAutoName);
          console.log(
            cars.brand.map((item) => {
              console.log(item.value);
              console.log(this.fullAutoName[0]);
              item.value == this.fullAutoName[0];
            })
          );

          // if (value) {
          //   this.fullAutoName = value.split(', ');
          //   if (cars.brand.hasOwnProperty('title') === this.fullAutoName[0]) {
          //     console.log('true');
          //   }
          //   if (cars.brand.includes(this.fullAutoName[1])) {
          //     console.log('true');
          //   }
          //   if (cars.brand.includes(this.fullAutoName[2])) {
          //     console.log('true');
          //   }
          // }
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
