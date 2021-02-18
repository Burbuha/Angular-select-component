import { CustomSelectComponent } from './../customSelect/customSelect.component';
import { Component, OnInit } from '@angular/core';
import { SelectOption } from '../ModelSelectOption';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  multiselect: boolean = false;
  brand: SelectOption[] = [
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
      value: 'Scoda',
      title: 'Scoda',
      isDisabled: false,
    },
    {
      value: 'Mazda',
      title: 'Mazda',
      isDisabled: false,
    },
    {
      value: "Citroen",
      title: 'Citroen',
      isDisabled: false,
    }
  ];
  model: SelectOption[] = [];
  year: SelectOption[] = [
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
  generation: SelectOption[] = [];

  customSelectControl!: FormControl;
  fullAutoNameControl!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.fullAutoNameControl = new FormGroup({
      brendAuto: new FormControl(),
      modelAuto: new FormControl(),
      yearAuto: new FormControl(),
      generationAuto: new FormControl()
    });

    this.fullAutoNameControl.valueChanges.subscribe((value) => console.log(value));
    this.fullAutoNameControl.statusChanges.subscribe((status) => console.log(status));
  }

}
