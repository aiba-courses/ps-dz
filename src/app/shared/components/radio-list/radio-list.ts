import { Component, input, output } from '@angular/core';
import { IRadioItem } from '../../interfaces/app';

@Component({
  imports: [],
  selector: 'app-radio-list',
  styleUrl: './radio-list.scss',
  templateUrl: './radio-list.html',
})
export class RadioList {
  list = input<IRadioItem[]>([]);

  selected = input<any | null>();

  get current() {
    return this.selected() || this.list().find((i) => i)?.id;
  }

  radioChange = output<string>()

  onSelectItem(value: any) {
    this.radioChange.emit(value);
  }
}
