import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-input',
  styleUrl: './input.scss',
  templateUrl: './input.html',
})
export class InputComponent {
  @Input()
  image: string | undefined = undefined

  @Input()
  value = '';

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInput(event: Event) {
    this.valueChange.emit((event.target as HTMLInputElement).value)
  }
}
