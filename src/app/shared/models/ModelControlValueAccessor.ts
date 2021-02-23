export interface ControlValueAccessor {
  writeValue(obj: any): void;
  registerOnChange(fn: any): void;
  registerOnChange(fn: any): void;
  setDisabledState?(isDisabled: boolean): void;
}
