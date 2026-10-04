import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-password-input',
  styleUrl: './password-input.scss',
  templateUrl: './password-input.html',
})
export class PasswordInput {
  @Input()
  value = '';

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInput(event: Event) {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }

  isShowPass = false;

  onEyeClick() {
    this.isShowPass = !this.isShowPass;
  }
}
