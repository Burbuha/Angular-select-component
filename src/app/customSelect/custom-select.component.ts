import { ControlValueAccessor } from '../shared/ModelControlValueAccessor';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import { SelectOption } from '../shared/ModelSelectOption';
import { CustomSelectService } from './custom-select.service';

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

  selectedOption?: SelectOption;
  selectedOptions: Array<any> = [];

  open: boolean = false;
  checkboxesShown: boolean = false;

  result: string = '';

  faCaretSquareDown = faCaretSquareDown;

  constructor(private customSelectService: CustomSelectService) { }

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

  private onChange: any = () => { };
  private onTouched: any = () => { };

  registerOnChange(fn: void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: void) {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    const selectedEl = this.options.find((el) => el.value === value);

    if (typeof value === 'undefined' || value === null) {
      this.selectedOption = undefined;
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

  setDisabledState(isDisabled: boolean) {
    //this.disabled = isDisabled;
  }

  toggleOpen() {
    if (this.options.length) {
      this.open = !this.open;
    }
  }

  //(Single select) MODE
  selectOption(option: SelectOption) {
    if (this.multiselect) {
      return;
    }
    this.writeValue(option.value);
    this.onTouched();
    this.open = false;
  }

  //(Multi select) MODE
  selectOptions(option: any) {
    if (this.multiselect) {
      if (typeof option.value === 'undefined' || option.value === null) {
        return;
      } else if (!option.isDisabled) {
        this.selectedOptions.push(option.value);
        option.isDisabled = true;
      } else {
        this.selectedOptions.forEach((item, i) => {
          if (item === option.value) {
            this.selectedOptions.splice(i, 1);
          }
        });
        option.isDisabled = false;
      }
      this.writeValue(this.selectedOptions);
      this.onTouched();
    }
  }
}
