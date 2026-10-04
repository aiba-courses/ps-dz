import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  @Input()
  text = '';

  @Output()
  btnClick: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
}
