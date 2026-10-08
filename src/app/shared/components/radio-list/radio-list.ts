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

  current: string | undefined = undefined;

  onSelectItem(value: string) {
    this.current = value;
  }
}
