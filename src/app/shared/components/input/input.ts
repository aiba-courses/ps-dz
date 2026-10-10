import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-input',
  styleUrl: './input.scss',
  templateUrl: './input.html',
})
export class InputComponent {
  image = input<string | undefined>(undefined);

  value = input('');

  valueChange = output<string>();

  onInput(event: Event) {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }
}
