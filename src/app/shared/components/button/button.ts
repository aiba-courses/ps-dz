import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  text = input('');

  btnClick = output<void>();

  onClick() {
    this.btnClick.emit();
  }
}
