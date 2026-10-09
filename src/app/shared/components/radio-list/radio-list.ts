import { Component, input } from '@angular/core';
import { IRadioItem } from '../../interfaces/app';

@Component({
  imports: [],
  selector: 'app-radio-list',
  styleUrl: './radio-list.scss',
  templateUrl: './radio-list.html',
})
export class RadioList {
  list = input<IRadioItem[]>([]);

  selected: string | undefined = undefined;

  get current() {
    return this.selected || this.list().find(i => i)?.id;
  }

  onSelectItem(value: string) {
    this.selected = value;
  }
}
