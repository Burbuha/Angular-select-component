import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SelectOption } from './ModelSelectOption';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Angular-select-component';
  customSelectControl!: FormControl;
  multiselect: boolean = false;
  selectOptions: SelectOption[] = [
    {
      value: 'phone',
      title: 'Phone',
      isDisabled: false,
    },
    {
      value: 'e-mail',
      title: 'E-mail',
      isDisabled: false,
    },
    {
      value: 'skype',
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
  ];
  ngOnInit() {
    this.customSelectControl = new FormControl();
    this.customSelectControl.valueChanges.subscribe((value) =>
      console.log(value)
    );
    this.customSelectControl.statusChanges.subscribe((value) =>
      console.log(value)
    );
  }
}
