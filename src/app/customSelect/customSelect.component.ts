import { ControlValueAccessor } from './../ModelControlValueAccessor';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
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
export class CustomSelectComponent implements OnInit, ControlValueAccessor {
  @Input() options: SelectOption[] = [];
  @Input() multiselect?: boolean;

  selectedOption?: SelectOption;
  selectedOptions: Array<any> = [];
  open: boolean = false;
  checkboxesShown: boolean = false;
  result: string = '';

  faCaretSquareDown = faCaretSquareDown;

  ngOnInit() {
    if (this.multiselect) {
      this.checkboxesShown = true;
    }
  }

  get isOpen(): boolean {
    return this.open;
  }

  get placeholder(): string {
    if (this.multiselect) {
      return this.selectedOptions.length
        ? `${this.selectedOptions.length} - selected`
        : 'Select';
    } else {
      return this.selectedOption && this.selectedOption.hasOwnProperty('title')
        ? this.selectedOption.title
        : 'Select';
    }
  }

  writeValue(value: any): void {
    const selectedEl = this.options.find((el) => el.value === value);

    if (typeof value === 'undefined' || value === null) {
      this.selectedOption = undefined;
      this.onChange();
      return;
    }

    if (this.multiselect) {
      this.selectedOptions = value;
      this.onChange(this.selectedOptions);
      this.result = value.join(', ');
    }

    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.onChange(this.selectedOption.value);
      this.result = this.selectedOption.value;
    }
  }

  registerOnChange(fn: void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: void) {
    this.onTouched = fn;
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  toggleOpen() {
    this.open = !this.open;
  }

  //(Single select) MODE
  optionSelect(option: SelectOption) {
    if (this.multiselect) {
      return;
    }
    this.writeValue(option.value);
    this.onTouched();
    this.open = false;
  }

  //(Multi select) MODE
  optionsSelect(option: any) {
    if (this.multiselect) {
      if (typeof option.value === 'undefined' || option.value === null) {
        return;
      } else if (!option.isDisabled) {
        this.selectedOptions.push(option.value);
        option.isDisabled = true;
      } else {
        for (let i = this.selectedOptions.length - 1; i >= 0; i--) {
          if (this.selectedOptions[i] === option.value) {
            this.selectedOptions.splice(i, 1);
          }
        }
        option.isDisabled = false;
      }

      this.writeValue(this.selectedOptions);
      this.onTouched();
    }
  }
}
