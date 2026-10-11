import { Component, EventEmitter, forwardRef, input, output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-password-input',
  styleUrl: './password-input.scss',
  templateUrl: './password-input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInput),
      multi: true,
    },
  ],
})
export class PasswordInput implements ControlValueAccessor {
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

  isShowPass = false;

  onEyeClick() {
    this.isShowPass = !this.isShowPass;
  }
}
