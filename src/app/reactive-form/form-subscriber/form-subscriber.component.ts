import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-form-subscriber',
  templateUrl: './form-subscriber.component.html',
  styleUrls: ['./form-subscriber.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormSubcriberComponent),
    },
  ],
})
export class FormSubcriberComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input('userChoice') val: string | Array<any> = '';

  disabled: boolean = true;
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {}

  get value() {
    return this.val;
  }

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch();
    }
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
