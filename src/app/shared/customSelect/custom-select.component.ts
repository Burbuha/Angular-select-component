import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';

import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

import { CustomSelectService } from '../custom-select.service';
import { SelectOption } from '../models/ModelSelectOption';

@Component({
  selector: 'app-custom-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {
  @Input() options: SelectOption[] = [];
  @Input() multiselect?: boolean;

  selectedOption: SelectOption | null | undefined;
  selectedOptions: Array<any> = [];
  customSelectControl: FormControl = new FormControl();

  isOpen: boolean = false;
  checkboxesShown: boolean = false;

  result: string = '';

  faCaretSquareDown = faCaretSquareDown;

  constructor(private customSelectService: CustomSelectService) {}

  ngOnInit() {
    if (this.multiselect) {
      this.checkboxesShown = true;
    }
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

  private onChange: any = () => {};
  private onTouched: any = () => {};

  registerOnChange(fn: void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: void) {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    const selectedEl = this.options.find((el) => el.value === value);

    if (typeof value === 'undefined' || value === null) {
      this.selectedOption = null;
      this.result = '';
      this.onChange(this.selectedOption);
      return;
    }

    if (this.multiselect) {
      this.selectedOptions = value;
      this.onChange(this.selectedOptions);
      this.result = value.join(', ');
    }

    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.result = this.selectedOption.value;
      this.onChange(this.result);
    }
  }

  toggleOpen() {
    if (this.options.length) {
      this.isOpen = !this.isOpen;
    }
  }

  //(Single select) MODE
  selectOption(option: SelectOption) {
    if (this.multiselect) return;
    this.writeValue(option.value);
    this.onTouched();
    this.isOpen = false;
  }

  //(Multi select) MODE
  selectOptions(event: any, option: SelectOption) {
    if (this.multiselect) {
      this.customSelectService.selectOptions(
        event,
        option,
        this.selectedOptions
      );
      this.writeValue(this.selectedOptions);
      this.onTouched();
    }
  }
}
