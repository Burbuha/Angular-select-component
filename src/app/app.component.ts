import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from './shared/ModelSelectOption';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Angular-select-component';
  customSelectControl!: FormControl;
  multiselect: boolean = true;
  selectOptions: SelectOption[] = [
    {
      value: '+375292222222',
      title: 'Phone',
      isDisabled: false,
    },
    {
      value: 'select@tut.by',
      title: 'E-mail',
      isDisabled: false,
    },
    {
      value: 'test',
      title: 'Skype',
      isDisabled: false,
    },
    {
      value: null,
      title: 'Null',
      isDisabled: false,
    },
    {
      value: 40 / 0,
      title: 'Infinity',
      isDisabled: false,
    },
    {
      value: 40,
      title: 'Number',
      isDisabled: false,
    },
    {
      value: [1, 2, 3],
      title: 'Array',
      isDisabled: false,
    },
    {
      value: undefined,
      title: 'Undefined',
      isDisabled: false,
    },
    {
      value: true,
      title: 'Boolean',
      isDisabled: false,
    },
    {
      value: { 'a': '1', 'b': '2', 'c': '3' },
      title: 'Object',
      isDisabled: false,
    },
  ];
  ngOnInit() {
    this.customSelectControl = new FormControl();
    this.customSelectControl.valueChanges.subscribe((value) =>
      console.log(value)
    );
  }

}
