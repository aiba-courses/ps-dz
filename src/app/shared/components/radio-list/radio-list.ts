import { Component, forwardRef, input, output } from '@angular/core';
import { IRadioItem } from '../../interfaces/app';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-radio-list',
  styleUrl: './radio-list.scss',
  templateUrl: './radio-list.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioList),
      multi: true,
    },
  ],
})
export class RadioList implements ControlValueAccessor {
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

  onSelectItem(value: string) {
    // const target = event.target as HTMLInputElement;
    // const value = target.value;
    this.value = value;

    this.onChange(value);
    this.onTouch();
  }

  list = input<IRadioItem[]>([]);

  get current() {
    return this.value || this.list().find((i) => i)?.id;
  }
}
