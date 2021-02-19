import { ControlValueAccessor } from './../ModelControlValueAccessor';
import { CustomSelectComponent } from './../customSelect/customSelect.component';
import { Component, OnInit } from '@angular/core';
import { SelectOption } from '../ModelSelectOption';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  multiselect: boolean = false;
  brands: SelectOption[] = [
    {
      value: 'Audi',
      title: 'Audi',
      isDisabled: false,
    },
    {
      value: 'BMW',
      title: 'BMW',
      isDisabled: false,
    },
    {
      value: 'Honda',
      title: 'Honda',
      isDisabled: false,
    },
  ];
  models: SelectOption[] = [
    {
      value: '1 Series',
      title: '1 Series',
      type: 'BMW',
      isDisabled: false,
    },
    {
      value: '2 Series',
      title: '2 Series',
      type: 'BMW',
      isDisabled: false,
    },
    {
      value: '100',
      title: '100',
      type: 'Audi',
      isDisabled: false,
    },
    {
      value: '200',
      title: '200',
      type: 'Audi',
      isDisabled: false,
    },
    {
      value: 'Accord',
      title: 'Accord',
      type: 'Honda',
      isDisabled: false,
    },
    {
      value: 'Civic',
      title: 'Civic',
      type: 'Honda',
      isDisabled: false,
    },
  ];
  years: SelectOption[] = [
    {
      value: 2021,
      title: '2021',
      isDisabled: false,
    },
    {
      value: 2020,
      title: '2020',
      isDisabled: false,
    },
    {
      value: 2019,
      title: '2019',
      isDisabled: false,
    },
    {
      value: 2018,
      title: '2018',
      isDisabled: false,
    },
    {
      value: 2017,
      title: '2017',
      isDisabled: false,
    },
    {
      value: 2016,
      title: '2016',
      isDisabled: false,
    },
    {
      value: 2015,
      title: '2015',
      isDisabled: false,
    },
    {
      value: 2014,
      title: '2014',
      isDisabled: false,
    },
    {
      value: 2013,
      title: '2013',
      isDisabled: false,
    },
  ];
  generations: SelectOption[] = [
    {
      value: 'I',
      title: 'I',
      isDisabled: false,
    },
    {
      value: 'II',
      title: 'II',
      isDisabled: false,
    },
    {
      value: 'III',
      title: 'III',
      isDisabled: false,
    },
    {
      value: 'IV',
      title: 'IV',
      isDisabled: false,
    },
    {
      value: 'V',
      title: 'V',
      isDisabled: false,
    },
  ];

  currentValue!: Object;

  // cars = {
  //   brand: [
  //     {
  //       value: 'BMW',
  //       title: 'BMW',
  //       isDisabled: false,
  //       model: [
  //         {
  //           value: '1 Series',
  //           title: '1 Series',
  //           isDisabled: false,
  //           year: [
  //             {
  //               value: 2013,
  //               title: '2013',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'I',
  //                   title: 'I',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2012,
  //               title: '2012',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'I',
  //                   title: 'I',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2011,
  //               title: '2011',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'I',
  //                   title: 'I',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2010,
  //               title: '2010',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'I',
  //                   title: 'I',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2009,
  //               title: '2009',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'I',
  //                   title: 'I',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2008,
  //               title: '2008',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'I',
  //                   title: 'I',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           value: '2 Series',
  //           title: '2 Series',
  //           isDisabled: false,
  //           year: [
  //             {
  //               value: 2020,
  //               title: '2020',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'III',
  //                   title: 'III',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2019,
  //               title: '2019',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'III',
  //                   title: 'III',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2018,
  //               title: '2018',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2017,
  //               title: '2017',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2016,
  //               title: '2016',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2015,
  //               title: '2015',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2014,
  //               title: '2014',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'I',
  //                   title: 'I',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       value: 'AUDI',
  //       title: 'AUDI',
  //       isDisabled: false,
  //       model: [
  //         {
  //           value: '100',
  //           title: '100',
  //           isDisabled: false,
  //           year: [
  //             {
  //               value: 1994,
  //               title: '1994',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'IV',
  //                   title: 'IV',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 1993,
  //               title: '1993',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'IV',
  //                   title: 'IV',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 1992,
  //               title: '1992',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'IV',
  //                   title: 'IV',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //           ],
  //         },

  //         {
  //           value: '200',
  //           title: '200',
  //           isDisabled: false,
  //           year: [
  //             {
  //               value: 1991,
  //               title: '1991',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 1992,
  //               title: '1992',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 1991,
  //               title: '1991',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'II',
  //                   title: 'II',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       value: 'HONDA',
  //       title: 'HONDA',
  //       isDisabled: false,
  //       model: [
  //         {
  //           value: 'CIVIC',
  //           title: 'CIVIC',
  //           isDisabled: false,
  //           year: [
  //             {
  //               value: 2017,
  //               title: '2017',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'X',
  //                   title: 'X',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2016,
  //               title: '2016',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'IX',
  //                   title: 'IX',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2015,
  //               title: '2015',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'IX',
  //                   title: 'IX',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2014,
  //               title: '2014',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'IX',
  //                   title: 'IX',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'VIII',
  //                   title: 'VIII',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           value: 'ACCORD',
  //           title: 'ACCORD',
  //           isDisabled: false,
  //           year: [
  //             {
  //               value: 2017,
  //               title: '2017',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'X',
  //                   title: 'X',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2016,
  //               title: '2016',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'IX',
  //                   title: 'IX',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2015,
  //               title: '2015',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'IX',
  //                   title: 'IX',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //             {
  //               value: 2014,
  //               title: '2014',
  //               isDisabled: false,
  //               generation: [
  //                 {
  //                   value: 'IX',
  //                   title: 'IX',
  //                   isDisabled: false,
  //                 },
  //                 {
  //                   value: 'VIII',
  //                   title: 'VIII',
  //                   isDisabled: false,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // };

  customSelectControl!: FormControl;
  fullAutoNameControl!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.fullAutoNameControl = new FormGroup({
      brandAuto: new FormControl(),
      modelAuto: new FormControl(),
      yearAuto: new FormControl(),
      generationAuto: new FormControl(),
    });

    this.fullAutoNameControl.valueChanges.subscribe(
      (value) => (this.currentValue = value)
    );

    this.fullAutoNameControl.statusChanges.subscribe((status) =>
      console.log(status)
    );
  }

  addModels(): SelectOption[] {
    return this.models.filter(
      (model) => model.type == this.fullAutoNameControl.value.brandAuto
    );
  }

  addYears(): any {
    if (this.fullAutoNameControl.value.modelAuto !== null) {
      return this.years;
    }
    return [];
  }

  addGenerations(): any {
    if (this.fullAutoNameControl.value.yearAuto !== null) {
      return this.generations;
    }
    return [];
  }
}
