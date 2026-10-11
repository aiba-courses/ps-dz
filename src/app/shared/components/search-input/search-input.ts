import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-search-input',
  styleUrl: './search-input.scss',
  templateUrl: './search-input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInput),
      multi: true,
    },
  ],
})
export class SearchInput implements ControlValueAccessor {
  value = '';
  disable = false;
  onChange = (value: string) => {};
  onTouch = () => {};

  writeValue(obj: any): void {
    this.value = obj ?? '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.value = value;

    this.onChange(value);
    this.onTouch();
  }
}
