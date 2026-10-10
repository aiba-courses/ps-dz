import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-password-input',
  styleUrl: './password-input.scss',
  templateUrl: './password-input.html',
})
export class PasswordInput {
  value = input('');

  valueChange = output<string>();

  onInput(event: Event) {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }

  isShowPass = false;

  onEyeClick() {
    this.isShowPass = !this.isShowPass;
  }
}
