import { Component } from '@angular/core';
import { SelectOption } from './ModelSelectOption';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public multiselect: boolean = true;
  public contactTypes: SelectOption[] = [
    {
      value: 'phone',
      title: 'Phone',
    },
    {
      value: 'e-mail',
      title: 'E-mail',
    },
    {
      value: 'skype',
      title: 'Skype',
    },
    {
      value: null,
      title: 'Null',
    },
    {
      value: 40 / 0,
      title: 'Infinity',
    },
    {
      value: 40,
      title: 'Number',
    },
    {
      value: [1, 2, 3],
      title: 'Array',
    },
    {
      value: undefined,
      title: 'Undefined',
    },
    {
      value: true,
      title: 'Boolean',
    },
  ];

  title = 'Angular-select-component';
}
