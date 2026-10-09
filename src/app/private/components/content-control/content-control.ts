import { Component } from '@angular/core';
import { SearchInput } from '../../../shared/components/search-input/search-input';
import { RadioList } from '../../../shared/components/radio-list/radio-list';
import { FromToDate } from '../../../shared/components/from-to-date/from-to-date';
import { GENRES } from '../../../shared/constants/genres.const';
import { SORT } from '../../../shared/constants/sort.const';

@Component({
  imports: [SearchInput, RadioList, FromToDate],
  selector: 'app-content-control',
  styleUrl: './content-control.scss',
  templateUrl: './content-control.html',
})
export class ContentControl {
  protected readonly genres = GENRES;
  protected readonly sort = SORT;
}
