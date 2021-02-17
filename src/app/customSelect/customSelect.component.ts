import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '../ModelSelectOption';

@Component({
  selector: 'app-custom-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
  templateUrl: './customSelect.component.html',
  styleUrls: ['./customSelect.component.scss'],
})
export class CustomSelectComponent {
  @Input() options: SelectOption[] = [];
  @Input() multiselect?: boolean;

  selectedOption?: SelectOption;
  open: boolean = false;

  get placeholder(): string {
    return this.selectedOption && this.selectedOption.hasOwnProperty('title')
      ? this.selectedOption.title
      : 'Select';
  }

  get isOpen(): boolean {
    return this.open;
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  optionSelect(option: SelectOption) {
    this.writeValue(option.value);
    this.onTouched();
    this.open = false;
  }

  toggleOpen() {
    this.open = !this.open;
  }

  writeValue(value: any) {
    if (!this.options) {
    }

    if (typeof value === 'undefined' || value === null) {
      return;
    }

    const selectedEl = this.options.find((el) => el.value === value);

    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.onChange(this.selectedOption.value);
    }
  }

  registerOnChange(fn: void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: void) {
    this.onTouched = fn;
  }
}
